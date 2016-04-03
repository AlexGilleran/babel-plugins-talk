export default function logAllUpdates(options) {
  return function wrap(ReactClass, uniqueId) {
    const displayName =
      options.components[uniqueId].displayName ||
      '<Unknown>';

    const originalComponentDidUpdate =
      ReactClass.prototype.componentDidUpdate;

    ReactClass.prototype.componentDidUpdate =
      function componentDidUpdate() {
        console.info(`${displayName} updated:`
          , this.props, this.state);

        if (originalComponentDidUpdate) {
          originalComponentDidUpdate
            .apply(this, arguments);
        }
      };

    return ReactClass;
  }
}
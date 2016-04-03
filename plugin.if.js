var _ = require('lodash');

module.exports = function (babel) {
  var t = babel.types;

  var visitor = {
    JSXElement: function (path) {
      var nodeName = path.node.openingElement.name ? path.node.openingElement.name.name : null;

      if (nodeName === 'If') {
        path.replaceWith(transformIf(path.node, path.hub.file));
      }
    }
  };

  function transformIf(node, file) {
    var attributes = node.openingElement.attributes;

    var condition = _.find(attributes, function (attr) {
      return attr.name.name === 'condition';
    });

    return t.ConditionalExpression(condition.value.expression, node.children, null);
  }

  return {
    inherits: require("babel-plugin-syntax-jsx"),
    visitor: visitor
  };
};
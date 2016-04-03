render() {
  if (this.props.condition) {
    return this.props.children;
  }
}

module.exports = function onClick() {
  try {
    throw new Error('Super unexpected error!!');
    this.setState({
      showCat: true
    });
  } catch (e) {
    alert(e.message);
  }
}
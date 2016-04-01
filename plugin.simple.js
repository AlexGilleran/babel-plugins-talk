module.exports = function (babel) {
  var types = babel.types;

  var visitor = {
    ThrowStatement: function (path) {
      path.replaceWith(
        types.callExpression(
          types.memberExpression(
            types.identifier('console'),
            types.identifier('error')  // console.error
          ),
          [ // (
            path.node.argument // new Error('This is an error message'), or whatever else is in here.
          ] // )
        )
      );
    }
  };

  return {
    visitor: visitor
  };
};
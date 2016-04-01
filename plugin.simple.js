module.exports = function (babel) {
  var types = babel.types;

  var visitor = {
    ThrowStatement: function (path) {
      path.replaceWith(
        types.callExpression(
          types.memberExpression(
            // console.error
            types.identifier('console'),
            types.identifier('error')
          ),
          [ // (
            path.node.argument
            // new Error('msg')
          ] // )
        )
      );
    }
  };

  return {
    visitor: visitor
  };
};
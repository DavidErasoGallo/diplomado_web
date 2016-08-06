var path = require('path');
var _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  var pth = path.join.apply(path, [_root].concat(args));
  console.log(pth); 
  return pth;
}
exports.root = root;
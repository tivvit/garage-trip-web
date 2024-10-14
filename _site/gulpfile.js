const { src, dest } = require('gulp');

exports.default = function() {
  return src('node_modules/bootstrap/scss/**')
    .pipe(dest('assets/css/boostrap'));
}
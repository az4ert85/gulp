const {src, dest, watch, series} = require('gulp')
const htmlmin = require('gulp-htmlmin')
const include = require('gulp-include')

function html()
{
    return src('app/html/*.html')
    .pipe(include())
    .pipe(htmlmin({
        collapseWhitespace:true
    }))
    .pipe(dest('dist/'))
}
exports.default = series(html)
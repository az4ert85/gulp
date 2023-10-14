const {src, dest, watch, series} = require('gulp')
const htmlmin = require('gulp-htmlmin')
const include = require('gulp-include')
const concat = require('gulp-concat')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const rename = require('gulp-rename')

function html()
{
    return src('app/html/*.html')
    .pipe(include())
    .pipe(htmlmin({
        collapseWhitespace:true
    }))
    .pipe(dest('dist/'))
}

function css()
{
    return src("app/sass/**/*.scss")
    .pipe(concat('style.scss'))
    .pipe(autoprefixer({
        browsers:'last 2 versions',
        cascade:false
    }))
    .pipe(cssnano())
    .pipe(rename({
        suffix:'.min',
        extname:'.css'
    }))
    .pipe(dest('dist/css'))
}

exports.default = series(html, css)
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');

const paths = {
  scss: './scss/**/*.scss',
  css: './css'
};

function compileSass() {
  return gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.css));
}

function watchSass() {
  gulp.watch(paths.scss, compileSass);
}

exports.default = compileSass;
exports.watch = watchSass;

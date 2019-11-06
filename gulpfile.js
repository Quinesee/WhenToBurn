const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");

//compile scss into css
function style() {
    //1. where is my scss files
    return gulp.src('./scss/**/*.scss')
    //2. pass files through sass compiler
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
    //3. where to save css
        .pipe(gulp.dest('./'));
}

function watch(){
    gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = gulp.parallel(style, watch);

const {src, dest, series, watch} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglifycss = require('gulp-uglifycss');
const livereload = require('gulp-livereload');

function copyHTML(cb){
    src('src/*.html')
     .pipe(dest('dist/'))
     .pipe(livereload());
    cb();
}

function copyCSS(cb){
    src(['src/style/*.css', '!src/style/style.css'])
        .pipe(uglifycss())
        .pipe(dest('dist/'))
        .pipe(livereload());
    cb();
}

function compileJS(cb){
    src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('dist/'))
        .pipe(livereload());
    cb();
}

function compileSASS(cb){
    src('src/style/style.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(uglifycss())
     .pipe(dest('dist/'))
     .pipe(livereload());
    cb();
}

function minifyImages(cb){
    src('src/images/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
    cb();
}


function start(cb){
    livereload.listen();
    watch('src/*.html', copyHTML);
    watch('src/images/*', minifyImages);
    watch('src/style/*.scss', compileSASS);
    watch(['src/style/*.css', '!src/style/style.css'], copyCSS);
    watch('src/js/*.js', compileJS);
    
    cb()
}


exports.build = series(copyHTML, copyCSS, compileJS, compileSASS, minifyImages);
exports.start = start;



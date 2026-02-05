const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// ======================
// SASS → CSS
// ======================
function compilarSass() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/css'));
}

// ======================
// IMAGENS
// ======================
function comprimirImagens() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// ======================
// JAVASCRIPT
// ======================
function comprimirJs() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// ======================
// TAREFAS
// ======================
exports.sass = compilarSass;
exports.images = comprimirImagens;
exports.js = comprimirJs;

exports.default = gulp.parallel(
    compilarSass,
    comprimirImagens,
    comprimirJs
);

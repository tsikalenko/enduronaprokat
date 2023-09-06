import gulp from 'gulp';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import gulpClean from 'gulp-clean';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import ghPages from 'gulp-gh-pages';

const sass = gulpSass(dartSass);
const bSync = browserSync.create();

function buildHTML() {
    return gulp
        .src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/'));
}

function buildCSS() {
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/'));
}

function buildJS() {
    return gulp
        .src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('dist/'));
}

function imgMin() {
    return gulp
        .src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/'));
}

export const clean = () => {
    return gulp.src('./dist').pipe(gulpClean());
};

function liveServer() {
    bSync.init({
        server: {
            baseDir: './dist',
        },
    });
}

export const build = gulp.series(
    clean,
    gulp.parallel(buildHTML, buildCSS, buildJS, imgMin),
);

export function dev() {
    liveServer();
    gulp.watch(['src/**'], build).on('change', () => bSync.reload());
}

export function deploy() {
    return gulp.src('./dist/**/*').pipe(ghPages());
}

export default build;

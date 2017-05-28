var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');

gulp.task('sass-build', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./extension/styles'))
});

gulp.task('sass-watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass-build']);  // Watch all the .less files, then run the less task
});

gulp.task('ts-build', function() {
    var tsResult = gulp.src('./src/typescript/**/*.ts')
        .pipe(ts({
            declaration: true,
            noExternalResolve: true
        }));

  return tsResult.js.pipe(gulp.dest('./extension/scripts'));
});

gulp.task('ts-watch', function() {
    gulp.watch('./src/typescript/**/*.ts', ['ts-build']);
});

gulp.task('default', ['sass-watch', 'ts-watch','sass-build', 'ts-build']); // Default will run the 'entry' watch task

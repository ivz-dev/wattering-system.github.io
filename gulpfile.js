var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('concat', function () {
  return gulp.src(['weather-icons-master/css/weather-icons.css',  'dist/css/bootstrap.min.css', 'dist/powerange.css', 'css/style.css', 'dist/css/bootstrap-theme.min.css'])
    .pipe(concatCss("concat.css"))
    .pipe(gulp.dest('css/'));

});

gulp.task('minify', function () {
  return gulp.src('css/concat.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'));
});
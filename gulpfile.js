const gulp = require('gulp');
const customizaBootstrap = require('gulp-customize-bootstrap');
const less = require('gulp-less');
const concat = require('gulp-concat');

gulp.task('default',['compileBootstrap', 'lib']);


gulp.task('compileBootstrap', function() {
    return gulp.src('./node_modules/bootstrap/less/bootstrap.less')
      .pipe(customizaBootstrap('./src/styles/less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('./dist/css/'));
  });

  gulp.task('lib', function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/js/'))
  })
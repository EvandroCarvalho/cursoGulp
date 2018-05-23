const gulp = require('gulp');
const customizaBootstrap = require('gulp-customize-bootstrap');
const less = require('gulp-less');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');

gulp.task('default',['compileBootstrap', 'lib', 'js', 'watch']);


gulp.task('compileBootstrap', () => {
    return gulp.src('./node_modules/bootstrap/less/bootstrap.less')
      .pipe(customizaBootstrap('./src/styles/less/*.less'))
      .pipe(less())
      .pipe(uglifycss())
      .pipe(gulp.dest('./dist/css/'));
  });

  gulp.task('imagem', () => {
    return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'))
  })

  gulp.task('lib', () => {
    return gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/angular/angular.min.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/js/'))
  })

  gulp.task('js', ()=> {
    return gulp.src(['./src/app.js', './src/controllers.js'])
    .pipe(concat('App.js'))
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js/'))
  })

  gulp.task('watch', ()=> {
    return gulp.watch(['./src/*.js'], ['js'])
  })



var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
gulp.task('uglify',function(){
    gulp.src('app/index.css')
        .pipe(gulp.dest('dist'))//保存一下
        .pipe(minifyCss())
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('dist'));//再保存一下
});
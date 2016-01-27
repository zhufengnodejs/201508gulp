var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('copy',function(){
    gulp.src('app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});
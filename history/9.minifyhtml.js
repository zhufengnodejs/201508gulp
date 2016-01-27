var gulp = require('gulp');
var minifyhtml = require('gulp-minify-html');
gulp.task('minifyhtml',function(){
    gulp.src('app/index.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest('dist'));
});
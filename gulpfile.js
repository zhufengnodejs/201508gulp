var gulp = require('gulp');
/**
 *  第一个参数是任务的名字
 *  第二个参数是本任务要执行前依赖的任务，本任务执行前哪些任务要先执行
 *  第三个参数是任务的定义
 */
gulp.task('copy-html',function(){
    return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});
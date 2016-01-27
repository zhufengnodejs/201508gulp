var gulp = require('gulp');
/**
 *  第一个参数是任务的名字
 *  第二个参数是本任务要执行前依赖的任务，本任务执行前哪些任务要先执行
 *  第三个参数是任务的定义
 */
var aaa=10;
gulp.task('1',function(){
    console.log('1');
});
gulp.task('2',function(cb){
    setTimeout(function(){
        console.log('2');
        aaa+=2;
        cb();
    },3000)

});
gulp.task('3',function(){
    console.log('3');
    aaa+=3;
});
//组合任务
gulp.task('default',['1','2','3'],function(){
    console.log(aaa);
});

var gulp = require('gulp');
/**
 *  第一个参数是任务的名字
 *  第二个参数是本任务要执行前依赖的任务，本任务执行前哪些任务要先执行
 *  第三个参数是任务的定义
 */

// disk distribution destination
gulp.task("1",function(cb){
    setTimeout(function(){
        console.log("1");
        cb();
    },1000)
})
gulp.task("2",["1"],function(cb){
    setTimeout(function(){
        console.log("2");
        cb();
    },2000)
})
gulp.task("3",["2"],function(cb){
    setTimeout(function(){
        console.log("3");
        cb();
    },2000)
})
gulp.task("default",["3"],function(){
    console.log("default");
})

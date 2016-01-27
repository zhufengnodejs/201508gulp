var gulp = require('gulp');
var fs = require('fs');

gulp.task('default',function(){
    gulp.watch('src/*',function(event){
        // path 变化的文件路径 type 变化的文件类型
        if(event.type == 'added'){
            console.log(event.path,'增加了');
            var path = event.path;//得到文件的绝对路径
            //d:\gulpdemo\src\index.js
            // src/index.js
            //__dirname当前文件的所在目录的绝对路径
            gulp.src(path.slice(__dirname.length+1))
                .pipe(gulp.dest('dist/'));
        }else if(event.type == 'changed'){
            console.log(event.path,'修改了');
            gulp.src(event.path.slice(__dirname.length+1))
                .pipe(gulp.dest('dist/'));
        }else if(event.type == 'deleted'){
            console.log(event.path,'删除');
            //console.log(__dirname+'\\dist\\a.js');
            //fs.unlinkSync(__dirname+'/dist/a.js');
        }
    });
});
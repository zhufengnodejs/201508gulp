#安装
##1. 在任意目录新建文件夹
文件夹名称不能叫**gulp**

在资源管理器中点击右键打开 `git bash here`

##2. 初始化一个项目
```
npm init
```
一路回车，都用默认设置

如果没反应就 `ctrl+c` 退出命令

最后会生成一个`package.json`的配置文件

##3. 全局安装gulp
```
 npm install gulp -g
```

##4. 安装完成后可以输入
```
gulp --help
```
如果输出一些帮助的信息就表示可以gulp命令行成功安装了
> $ gulp --help
>  [10:50:11] Local gulp not found in d:\gulpstudy
>  [10:50:11] Try running: npm install gulp

##5. 本地安装gulp
```
 npm install gulp
```
再执行
```
gulp
```
如果输出这个就成功了
> D:\gulpstudy>gulp
>  [10:54:30] No gulpfile found

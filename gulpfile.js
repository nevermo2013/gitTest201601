var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');
//测试copy任务  注册任务名为copy
gulp.task('copy',function () {
	console.log('开始拷贝...');
	// gulp.src 取文件
	//pipe  管道  传递操作过程中，执行任务（合并，压缩等相当于加工源文件）
	//链式调用，可以多个pipe操作
    gulp.src('style.less')  
	  .pipe(gulp.dest('less/'));   //gulp.dest  输出文件到相应目录，如果目录不存在，创建。
})

gulp.task('test',function () {
	//当*.less文件发生改变，copy
	//当less文件发生改变后，会在css下面的style.css同时改变
	 gulp.watch('*.less',['less','copy','minCss']); 
	 // gulp.watch('*.less',['lessMin','copy']); 
	
})


//编译less为css文件的任务
gulp.task('less',function () {
	console.log('编译less...');
	 gulp.src('*.less')
	 .pipe(less())
	 .pipe(gulp.dest('css')); 
})

//编译less为css文件的任务且压缩
gulp.task('lessMin',function () {
	console.log('编译less...');
	 gulp.src('*.less')
	 .pipe(less())
	 .pipe(cssnano())
	 .pipe(gulp.dest('css')); 
})

//压缩css的任务
gulp.task('minCss',function () {
	console.log('压缩css...');
	 gulp.src('css/*.css')
	 .pipe(cssnano())
	 .pipe(gulp.dest('css/min')); 
})


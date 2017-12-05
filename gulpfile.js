//引入gulp
var gulp = require('gulp');
//引入压缩js文件的包
var uglify = require('gulp-uglify');
//引入合并js文件的包
var concat = require('gulp-concat');
//引入压缩css文件的包
var cssmin = require('gulp-cssmin');
//引入压缩html文件的包
var htmlmin = require('gulp-htmlmin');
//处理js文件
gulp.task('jsc',function(){
	gulp.src(['./index.js','./app.js'])
	.pipe(concat('hebing.js'))
	.pipe(uglify())
	.pipe(gulp.dest('lib'));
})

 //处理css文件
gulp.task('style', function () {
    gulp.src('*.css')
    	.pipe(concat('hebing.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('lib'));
});

 //处理html文件
gulp.task('html', function () {
    gulp.src('*.html')
    	.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('lib'));
});
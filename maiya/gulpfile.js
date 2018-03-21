var gulp = require ('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');


/********************index JS*************************/
gulp.task('script',function() {
	gulp.src('ds/js/*.js')
		.pipe(concat('index.js'))
		.pipe(gulp.dest('js'))
});
/********************login JS*********************************/
gulp.task('sc',function() {
	gulp.src('yyw/js/*.js')
		.pipe(concat('login.js'))
		.pipe(gulp.dest('js'))
});
/*********************list JS****************************/
gulp.task('scr',function() {
	gulp.src('yzx/js/*.js')
		.pipe(concat('list.js'))
		.pipe(gulp.dest('js'))
});
/************************shopcar*****************************/
gulp.task('scri',function() {
	gulp.src('sjt/js/*.js')
		.pipe(concat('shopcar.js'))
		.pipe(gulp.dest('js'))
});
/**********************login css******************************/
gulp.task('logincss',function() {
	gulp.src('yyw/css/*.css')
		.pipe(concat('login.css'))
		.pipe(gulp.dest('css'))
})
/***********************list css***********************************/
gulp.task('listcss',function() {
	gulp.src('yzx/css/*.css')
		.pipe(concat('list.css'))
		.pipe(gulp.dest('css'))
})
/***********************shopcar css*************************/
gulp.task('shopcarcss',function() {
	gulp.src('sjt/css/*.css')
		.pipe(concat('shopcss.css'))
		.pipe(gulp.dest('css'))
})
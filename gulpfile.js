var gulp = require('gulp');
var sass = require('gulp-sass');
var del  = require('del');
var jshint = require('gulp-jshint');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var rename = require('rename');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var livereload = require('gulp-livereload');
livereload({ start: true });


gulp.task('sass', function () {
	console.log('sass updating...');
  	return gulp.src(['./components/**/*.scss', './client/**/*.scss'])
  		.pipe(watch(['./components/**/*.scss', './client/**/*.scss']))
  		.pipe(livereload())
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('./include/css'));
});

//Static Asset Injection for index.html
gulp.task('index', function () {
	var rootPath = 'RWeb-StyleGuide';
	var sources = gulp.src([
		'include/client.css',
		'include/**/*.css',
		'components/**/*.js'
	], {read: false});

    gulp.src('./index.html')
    	
        .pipe(inject(gulp.src(bowerFiles(), 
        {
            read: false
        }), {
            name: 'bower',
            addPrefix: rootPath
        }))
        .pipe(inject(sources, {addPrefix: rootPath}))
        .pipe(gulp.dest('./'));
    console.log('index injection complete...');
});

gulp.task('clean', function(cb){
	del(['include/*'], cb);
	console.log('You have a clean include folder.');
});

gulp.task('watch', function(){
	console.log('Watching for changes...');
	livereload.listen();
});

gulp.task('default', ['clean','sass', 'index', 'watch'], function() {
	
});
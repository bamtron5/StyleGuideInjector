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
var prefix = require('gulp-prefix');

gulp.task('sass', function () {
  	return gulp.src('./components/**/*.scss', {relative: true})
	    .pipe(sass().on('error', sass.logError))
	    .pipe(gulp.dest('./include/css'));
});

//Static Asset Injection for index.html
gulp.task('index', function () {
	var rootPath = 'RWeb-StyleGuide';
	var sources = gulp.src([
		'components/**/*.js', 
		'include/**/*.css'
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
});

gulp.task('clean', function(cb){
	del(['include/*'], cb);
});

gulp.task('default', ['clean', 'sass', 'index'], function() {
	console.log('Sass rebuilt and cleaned.  Index injection complete.');
});
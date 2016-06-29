var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
	return gulp.src([
		'./bower_components/bng-selector/demo/index.html',
		'./bower_components/bng-selector/dist/bng-selector.min.css',
		'./bower_components/bng-selector/dist/bng-selector.min.js'
	])
	.pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({ port: 8000 }));
});
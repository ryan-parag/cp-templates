var gulp 		    = require('gulp'),
		mjml		    =	require('gulp-mjml'),
    browserSync = require('browser-sync');

gulp.task('templates', function () {
  return gulp.src('src/templates/**/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('dist/'))
})

gulp.task('browser-sync', ['templates'], function () {
  browserSync({
    server: {
      baseDir: './dist/'
    },
    notify: false
  });
});

gulp.task('watch', function (){
	gulp.watch('src/templates/**/*.mjml',['templates']);
});

gulp.task('default', ['browser-sync', 'watch']);

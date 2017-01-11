var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('sass', function () {
  gulp.src('assets/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  });
});

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('assets/css/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('assets/js/**/*.js', browserSync.reload);
});


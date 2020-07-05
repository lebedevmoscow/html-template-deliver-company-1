var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

gulp.task('code', function(){
    return gulp.src('app')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('code:watch', function(){
    gulp.watch('app/**/*.*', gulp.parallel('code'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
})

gulp.task('default', gulp.parallel('browser-sync', 'sass:watch', 'code:watch'));

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');//添加私有属性前缀

//编译scss文件为css文件并添加私有属性前缀
gulp.task('sass', function(){
    var processors = [
        autoprefixer
    ];

    return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('css'))

});

gulp.task('default', ['sass'], function(event){

    gulp.watch(['sass/**/*.scss'], ['sass']);

});
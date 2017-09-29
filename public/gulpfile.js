var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer  = require('autoprefixer');//添加私有属性前缀
var livereload = require('gulp-livereload');

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

//页面自动刷新
gulp.task('reload', function(){
   livereload.listen();
   gulp.watch(['../views/**/*.hbs', 'css/**/*.css'], function(event){
     livereload.changed(event.path);  
   });
});

gulp.task('default', ['sass', 'reload'], function(event){

    gulp.watch(['sass/**/*.scss'], ['sass']);

});
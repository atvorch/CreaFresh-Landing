var gulp = require('gulp');  
var sass = require('gulp-sass'); 
var cleanCSS = require('gulp-clean-css');
var autiprefixer = require('gulp-autoprefixer');
var minifyjs = require('gulp-js-minify');  
let sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync');


const server = browserSync.create();

const path = {
    src: {
		scss: 'stylesheets/*.scss',
		js: 'js/*.js'
	},
	build: {
		scss: './',
		js: './'
	},
	watch: {
		html: 'index.html',
		css: 'stylesheets/*.css',
		scss: 'stylesheets/*.scss',
		js: 'js/*.js',
	}
};
gulp.task('build:js', function () {  
	return gulp.src(path.src.js)
	.pipe(sourcemaps.init())
	.pipe(minifyjs())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path.build.js));
});
gulp.task('build:sass', function () {  
	return gulp.src(path.src.scss)
	.pipe(sass())
	.pipe(autiprefixer())
	.pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
	.pipe(gulp.dest(path.build.scss));
});

gulp.task('browser-sync', function() {  
    browserSync.init([path.watch.scss,path.watch.css, path.watch.html,  path.watch.js], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('build', ['build:sass','build:js', 'browser-sync'], function () {  
	gulp.watch(path.watch.scss, ['build:sass']);
	gulp.watch(path.watch.js, ['build:js']);
});



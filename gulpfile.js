var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html")
, minifyCss = require("gulp-minify-css")
, uglify = require("gulp-uglify")
, concat = require("gulp-concat")
, rename = require('gulp-rename')
, clean = require('gulp-clean');

var jsDest = 'dist/js';
var cssDest = 'dist/css';

gulp.task('ganeralJS', function() {  
    return gulp.src([
            'js/html5shiv.js',
            'js/respond.min.js',
            'js/jquery-2.1.3.min.js',
            'js/bootstrap.min.js',
            'js/jquery.scrollTo.js',
            'js/jquery.nav.js',
            'js/jquery.sticky.js',
            'js/jquery.easypiechart.min.js',
            'js/jquery.isotope.min.js',
            'js/jquery.magnific-popup.min.js',
            'js/waypoints.min.js',
            'js/jqBootstrapValidation.js',
            'js/main.js',
            'js/vegas.js',
            'js/modernizr-2.6.2.min.js',
            'js/angular/angular.js',
            'js/angular/angular-sanitize.js',
            'js/angular/angular-translate.js',
            'js/angular/angular-cookies.js',
            'js/angular/siteApp.js',
            'js/angular/indexCtrl.js'
        ])
        .pipe(concat('general.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('general.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('style', function() {  
    return gulp.src([
            'css/bootstrap.min.css',
            'css/font-awesome.min.css',
            'css/font-source.css',
            'css/font-oxygen.css',
            'css/magnific-popup.css',
            'css/vegas.min.css',
            'css/main.css',
            'css/colors/blue.css'
        ])
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('style.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(cssDest));
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

// task
gulp.task('default', ['clean', 'ganeralJS', 'style'], function () {
    gulp.src('./img/**/*.*') // path to your files
    .pipe(gulp.dest('dist/img'));
    gulp.src('./fonts/**/*.*') // path to your files
    .pipe(gulp.dest('dist/fonts'));
    gulp.src('./favicon.ico') // path to your files
    .pipe(gulp.dest('dist'));
    gulp.src('./*.html') // path to your files
    .pipe(gulp.dest('dist'));
});
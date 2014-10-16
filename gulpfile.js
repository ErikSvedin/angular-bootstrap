var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    compass = require('gulp-compass');


var includes = [
    // Load angular and dependencies first
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',

    // Load main.js, config.js and then app related scripts
    'assets/js/main.js',
    'assets/js/config.js',
    'assets/js/**/*.js'
];

// Build app without minification
gulp.task('js', function () {
  gulp.src(includes).
    pipe(sourcemaps.init()).
    pipe(ngAnnotate()).
    pipe(concat('app.js')).
    pipe(sourcemaps.write()).
    pipe(gulp.dest('assets/dist'))
});


// Compile SASS
gulp.task('compass', function() {
    gulp.src(['assets/styles/sass/styles.scss']).
        pipe(compass({
            config_file: 'config.rb',
            css: 'assets/dist',
            sass: 'assets/styles/sass'
        })).
        pipe(minifyCSS({})).
        pipe(gulp.dest('assets/css'));
});

// Watch file changes
gulp.task('watch', ['compass'], function () {
  gulp.watch('assets/styles/sass/**/*.scss', ['compass']);
  gulp.watch('assets/js//**/*.js', ['js']);
});

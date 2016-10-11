// github.com/humanitas-labs/docker-babel-flow

var gulp = require('gulp'),
    flow = require('gulp-flowtype'),
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon');
    cache = require('gulp-cached');

const BUILD_FOLDER = "./build";
const SOURCE_FOLDER = "./src"

gulp.task('compile', function() {
  var stream = gulp.src("./src/**/*.js")
  .pipe(cache("compiling"))
  .pipe(flow())
  .pipe(babel({presets: ['es2015']}))
  .pipe(gulp.dest(BUILD_FOLDER));

  return stream;
});


gulp.task("dev", ['compile'], function() {
  var stream = nodemon({
    script: './build/index.js',
    watch: 'src',
    tasks: ['compile']
  });

  return stream;
});

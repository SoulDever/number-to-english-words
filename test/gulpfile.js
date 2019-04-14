'use strict';
var gulp = require('gulp');
var babel = require('gulp-babel');
var gulpPlugins = {
  concat: require('gulp-concat'),
  rename: require('gulp-rename'),
  replace: require('gulp-replace'),
  uglify: require('gulp-uglify'),
  wrap: require('gulp-wrap')
};
var log = require('fancy-log');
var license = require('uglify-save-license');

var pkg = require('./package.json');

function bundleTask() {
  var USE_STRICT_PATTERN = /(['"]use strict['"];?\n?)/g;
  var REQUIRE_PATTERN = /((?:var |,)[^=]+=\s*require\([^\)]+\);?\n?)/g;
  var EXPORT_PATTERN = /((?:module\.)?exports\s*=\s*[^,;]+;?\n?)/g;

  var files = [
    '../app/core/isSafeNumber.js',
    '../app/core/numberToEnglish.js',
  ];

  return gulp.src(files)
    .on('error', log.error)
    .pipe(babel({
	    presets: ['@babel/env']
    }))
    .pipe(gulpPlugins.wrap({ src: 'wrapEach.tmpl' }))
    .pipe(gulpPlugins.replace(USE_STRICT_PATTERN, ''))
    .pipe(gulpPlugins.replace(REQUIRE_PATTERN, ''))
    .pipe(gulpPlugins.replace(EXPORT_PATTERN, ''))
    .pipe(gulpPlugins.concat('numberToEnglish.js'))
    .pipe(gulpPlugins.wrap({ src: 'wrapBundle.tmpl' }, pkg, { variable: 'data' }))
    .pipe(gulp.dest('./'))
    // Minified version
    .pipe(gulpPlugins.uglify({ output: { comments: license } }))
    .pipe(gulpPlugins.rename('numberToEnglish.min.js'))
    .pipe(gulp.dest('./'));
}

module.exports = {
	build: gulp.parallel(bundleTask)
};

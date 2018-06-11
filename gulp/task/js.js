'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const changed = require('gulp-changed');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/jsOpt');

//--------------------------------------------------------------------------------
// タスクの定義
//--------------------------------------------------------------------------------
const execute = (isWatch, isRelease) => {
	return gulp.src(opt.src)
		.pipe(gulpIf(isWatch, changed(opt.dest.build)))
		.pipe(babel({presets: ['env']}))
		.pipe(gulpIf(isRelease, uglify()))
		.pipe(gulpIf(isRelease, gulp.dest(opt.dest.release), gulp.dest(opt.dest.build)));
};

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.js.build, () => {
	return execute(false, false);
});

gulp.task(taskName.js.release, () => {
	return execute(false, true);
});


module.exports = execute;

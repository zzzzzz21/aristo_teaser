'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const changed = require('gulp-changed');
const ejs = require('gulp-ejs');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/htmlOpt');

//--------------------------------------------------------------------------------
// タスクの定義
//--------------------------------------------------------------------------------
const execute = (isWatch, isRelease) => {
	return gulp.src(opt.src)
		.pipe(gulpIf(isWatch, changed(opt.dest.build)))
		.pipe(ejs('', {}, {"ext": ".html"}))
		.pipe(gulpIf(isRelease, gulp.dest(opt.dest.release), gulp.dest(opt.dest.build)));
};

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.html.build, () => {
	return execute(false, false);
});

gulp.task(taskName.html.release, () => {
	return execute(false, true);
});


module.exports = execute;

'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const svgo = require('imagemin-svgo');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/imageOpt');

//--------------------------------------------------------------------------------
// タスクの定義
//--------------------------------------------------------------------------------
const execute = (isRelease) => {
	return gulp.src(opt.src)
		.pipe(gulpIf(isRelease, imagemin({ use: [pngquant(opt.png), mozjpeg(opt.jpg), svgo()] })))
		.pipe(gulpIf(isRelease, gulp.dest(opt.dest.release), gulp.dest(opt.dest.build)));
};

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.image.build, () => {
	return execute(false);
});

gulp.task(taskName.image.release, () => {
	return execute(true);
});

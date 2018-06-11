'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cssmin = require('gulp-cssmin');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/sassOpt');

//--------------------------------------------------------------------------------
// タスクの定義
//--------------------------------------------------------------------------------
const execute = (isWatch, isRelease) => {
	return gulp.src(opt.src)
		.pipe(gulpIf(isWatch, plumber({
			errorHandler: notify.onError({
				title: 'Sass Compile Error',
				message: 'Error: <%= error.message %>'
			})
		})))
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(autoprefixer(opt.autoprefixer))
		.pipe(gcmq())
		.pipe(gulpIf(isRelease, cssmin()))
		.pipe(gulpIf(isRelease, gulp.dest(opt.dest.release), gulp.dest(opt.dest.build)));
};

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.sass.build, () => {
	return execute(false, false);
});

gulp.task(taskName.sass.release, () => {
	return execute(false, true);
});


module.exports = execute;

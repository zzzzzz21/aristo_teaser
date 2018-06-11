'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSybc = require('browser-sync');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/watchOpt');

//--------------------------------------------------------------------------------
// タスクの読み込み
//--------------------------------------------------------------------------------
const html = require('./html');
const sass = require('./sass');
const js = require('./js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.watch, () => {
	watch(opt.html, () => {
		html(true, false).pipe(browserSybc.stream());
	}).on('error', () => { });

	watch(opt.sass, () => {
		sass(true, false).pipe(browserSybc.stream());
	}).on('error', () => { });

	watch(opt.js, () => {
		js(true, false).pipe(browserSybc.stream());
	}).on('error', () => { });
});

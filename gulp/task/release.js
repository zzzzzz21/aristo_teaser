'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const runSequence = require('run-sequence');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.release, [taskName.clean.release], (callback) => {
	runSequence(
		taskName.sprite,
		taskName.html.release,
		taskName.sass.release,
		taskName.js.release,
		taskName.image.release,
		taskName.concat.release,
		taskName.copy.release,
		callback
	);
});

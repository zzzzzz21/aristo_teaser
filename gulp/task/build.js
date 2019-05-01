'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const runSequence = require('run-sequence');
var fs = require('fs');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.build, [taskName.clean.build], (callback) => {
	runSequence(
		taskName.sprite,
		taskName.html.build,
		taskName.sass.build,
		taskName.js.build,
		taskName.image.build,
		taskName.concat.build,
		taskName.copy.build,
		callback
	);
});

'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const mergeStream = require('merge-stream');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/concatOpt');

//--------------------------------------------------------------------------------
// タスクの定義
//--------------------------------------------------------------------------------
const execute = (isRelease) => {
	const stream = mergeStream();

	opt.entry.forEach(function (item) {
		const data = gulp.src(item.src)
			.pipe(concat(item.out))
			.pipe(gulpIf(isRelease, gulp.dest(item.dest.release), gulp.dest(item.dest.build)));

		stream.add(data);
	});

	return stream.isEmpty() ? null : stream;
};

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.concat.build, () => {
	return execute(false);
});

gulp.task(taskName.concat.release, () => {
	return execute(true);
});

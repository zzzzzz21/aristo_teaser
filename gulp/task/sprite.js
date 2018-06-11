'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const spritesmith = require('gulp.spritesmith');
const mergeStream = require('merge-stream');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const taskName = require('../taskName');
const opt = require('../option/spriteOpt');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.sprite, () => {
	const stream = mergeStream();

	opt.entry.forEach(function (item) {
		const data = gulp.src(item.src)
			.pipe(spritesmith({
				imgName: item.out.img,
				cssName: item.out.sass,
				imgPath: item.path + item.out.img,
				cssFormat: 'scss',
				cssTemplate: 'src/sass/helpers/sprite_template.txt',
				padding: item.padding
			}));

		data.img.pipe(gulp.dest(item.dest.img));
		data.css.pipe(gulp.dest(item.dest.sass));

		stream.add(data);
	});

	return stream.isEmpty() ? null : stream;
});

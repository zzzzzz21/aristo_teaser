'use strict';

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const path = require('../path');

//--------------------------------------------------------------------------------
// 設定のエクスポート
//--------------------------------------------------------------------------------
module.exports = {
	// 対象ファイル
	src: path.srcDir + path.sassDir + '**/*.scss',
	// 出力先
	dest: {
		build: path.buildDir + path.cssDir,
		release: path.releaseDir + path.cssDir
	},
	// AutoPrefixerの設定 
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'ie >= 11',
			'iOS >= 10',
			'Android >= 5'
		],
		cascade: false,
		grid: true
	}
};

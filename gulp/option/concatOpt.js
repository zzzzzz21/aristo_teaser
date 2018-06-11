'use strict';

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
const path = require('../path');

//--------------------------------------------------------------------------------
// 設定のエクスポート
//--------------------------------------------------------------------------------
module.exports = {
	entry: [
		// 見本
		{
			// 対象ファイル
			src: [
				path.srcDir + path.libDir + 'jquery-3.2.1.min.js',
				path.srcDir + path.libDir + 'jquery.colorbox-min.js',
				path.srcDir + path.libDir + 'jquery.validationEngine.js',
				path.srcDir + path.libDir + 'jquery.validationEngine-ja.js',
				path.srcDir + path.libDir + 'slick.min.js'
			],
			// 出力先
			dest: {
				build: path.buildDir + path.jsDir,
				release: path.releaseDir + path.jsDir
			},
			// 出力するファイル名
			out: 'lib.js'
		}
	]
};

'use strict';

module.exports = {
	dev: 'default',
	build: 'build',
	release: 'release',
	browserSync: 'browserSync',
	watch: 'watch',
	sprite: 'sprite',

	html: {
		build: 'html',
		release: 'html:release'
	},

	sass: {
		build: 'sass',
		release: 'sass:release'
	},

	js: {
		build: 'js',
		release: 'js:release'
	},
	
	image: {
		build: 'image',
		release: 'image:release'
	},

	concat: {
		build: 'concat',
		release: 'concat:release'
	},

	copy: {
		build: 'copy',
		release: 'copy:release'
	},

	clean: {
		build: 'clean',
		release: 'clean:release'
	}
};

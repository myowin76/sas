module.exports = {
	options: {
		browsers: ['last 3 version']
	},
	multiple_files: {
		expand: true,
		flatten: true,
		src: 'www-tmp/styles/*.css',
		dest: 'www-tmp/styles/'
	}
}
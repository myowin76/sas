module.exports = {
	dev:{
		dynamic: {
			files: [{
				expand: true,
				cwd: 'src/images/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'dist/images/'
			}]
		}
	}
	// dev:{
	// 	dynamic: {
	// 		files: [{
	// 			expand: true,
	// 			cwd: 'www-dev/images/',
	// 			src: ['**/*.{png,jpg,gif}'],
	// 			dest: 'www-tmp/images/'
	// 		}]
	// 	}
	// }
}
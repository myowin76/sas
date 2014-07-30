module.exports = {
	
		minify: {
	    expand: true,
	    cwd: 'dist/css/',
	    src: ['*.css', '!*.min.css'],
	    dest: 'dist/css/',
	    ext: '.min.css'
	  }
}
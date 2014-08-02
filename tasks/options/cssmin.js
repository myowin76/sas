module.exports = {
	
		minify: {
	    expand: true,
	    cwd: 'dist/styles/',
	    src: ['*.css', '!*.min.css'],
	    dest: 'dist/styles/',
	    ext: '.min.css'
	  }
}
module.exports = {
	dev:{
		files: [
      { 
        expand: true,
        cwd: 'src/images/', 
        src: ['**/*.{png,jpg,svg,gif}'], 
        dest:'dist/images/' 
      }
    ]
	}
}
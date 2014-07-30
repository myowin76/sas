module.exports = {
  dev: {                    // Another target
    options: {
      require: 'susy',
      sassDir: 'src/sass',
      imagesPath: 'src/images',
      // spriteLoadPath: '/src/images',
      generatedImagesPath: 'dist/images',
      cssDir: 'dist/styles'
    },
    files: {
			'dist/styles/style.css': 'src/sass/style.scss',
      'dist/styles/ie.css': 'src/sass/ie.scss'
		}
  }
}
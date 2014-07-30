module.exports = {

	dev: {
		options: {
			require: 'susy',
			compass: true,
			style: 'expanded',
			lineNumbers: true
		},
		files: {
			'dist/styles/style.css': 'src/sass/style.scss'
		}
	}

}
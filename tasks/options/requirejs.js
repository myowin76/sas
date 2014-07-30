module.exports = {
	options:{
		baseUrl: "./www-dev/",
		mainConfigFile: './www-dev/scripts/config.js',
		dir: "./www-tmp/scripts/",
		modules: [
				{ name: 'main' }
		],
		waitSeconds: 7,
		skipSemiColonInsertion: false,
		keepBuildDir:true
	}
}
const path = require('path');

module.exports = {
	entry: {
		modules: ['./src/index.js', './src/age.js']
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
};
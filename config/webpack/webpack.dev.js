var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var util = require('./util');

module.exports = webpackMerge(commonConfig, {
	//devtool: 'cheap-module-eval-source-map',

	debug: true,

	output: {
		path: util.root('dist'),
		publicPath: 'http://localhost:8080/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},

	plugins: [
		new ExtractTextPlugin('[name].css')
	],

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
});
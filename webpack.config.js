var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    'js/app.js': './client/js/app.jsx',
	'js/about.js': './client/js/about.jsx',
	'js/codingdojo.js': './client/js/codingdojo.jsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]'
  },
  module: {
    loaders: [
      {test: /\.js|jsx$/, loaders: ['jsx?harmony']},
    ],
  },
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
  ]
};
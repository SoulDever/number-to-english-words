const compose = require('next-compose');
const withImages = require('next-images');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = compose([withImages(),
	{
		webpack(config) {
			config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

			return config
		}
	}
]);

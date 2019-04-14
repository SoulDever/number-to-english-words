const compose = require('next-compose');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = compose([
	/*
	[
		withSass, {
			cssModules: true,
		}
	],*/
	withImages(),
	{
		webpack(config) {
			config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

			return config
		}
	}
])

const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({

        loader: 'babel-loader',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'tests.webpack.js'
        ],

        // list of files to exclude
        exclude: [],

        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap'],
            'tests/**/*.js': ['babel', 'webpack', 'sourcemap'],
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: false
        },

        colors: true,

        autoWatch: true,
        browsers: ['Chrome'], // ['PhantomJS', 'Chrome'],
        singleRun: false
    });
};
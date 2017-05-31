module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map',
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
            {test: /\.scss/, loader: 'style-loader!css-loader!sass-loader', exclude: /node_modules/},
        ]
    },

    devtool: 'inline-source-map'
};
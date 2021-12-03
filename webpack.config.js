const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './test/index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '../dist',
    },

    // Enable sourcemaps for debugging webpack"s output.
    devtool: 'source-map',

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: ['.ts', '.js', '.json'],
        // load modules whose location is specified in the paths section of tsconfig.json
        plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })]
    },

    module: {
        rules: [
            // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
            { test: /\.ts?$/, loader: 'ts-loader' },

            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },

    devServer: {
        // All options here: https://webpack.js.org/configuration/dev-server/
        
        // enable HMR on the server
        hot: true,
        // match the output path
        // contentBase: resolve(__dirname, '../dist'),
        // match the output `publicPath`
        // publicPath: '/',

        // Enable to integrate with Docker
        //host:"0.0.0.0",

        port: 3000,
        historyApiFallback: true,
        // All the stats options here: https://webpack.js.org/configuration/stats/
        // stats: {
        //     colors: true, // color is life
        //     chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
        //     'errors-only': true
        // }
    },
};

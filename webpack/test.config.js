var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, '../node_modules');

var config = {
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    "compilerOptions": {
                        "removeComments": false
                    }
                },
                exclude: [ nodeModulesPath ]
            },
            {
                test: /\.(:?html)$/,
                loader: 'html-loader'
            }
        ]
    },
    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
        customAttrAssign: [ /\)?\]?=/ ]
    },
    resolve: {
        extensions: ['', '.ts','.js','.json','.css','.html']
    },
    plugins: []
};

module.exports = config;

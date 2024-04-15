const webpack = require('webpack'); // CommonJS module system, installed module
const path = require('path'); // pre-defined module from NodeJS
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (__env, argv) {
    // customize based on Production / development env
    // return configuration object
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[contenthash:8].js",
            clean:true
        },
        target: ['web', 'es5'],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js']
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"public/index.html")
        })],
    }
}
// import Product from './Product'
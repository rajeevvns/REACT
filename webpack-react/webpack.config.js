const webpack = require('webpack'); // CommonJS module system, installed module
const path = require('path'); // pre-defined module from NodeJS

module.exports = function (__env, argv) {
    // customize based on Production / development env
    // return configuration object
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
        },
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
        }
    }
}
// import Product from './Product'
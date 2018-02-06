const path = require('path');
// 在内存中生成一份 HTML 代码，
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入门文件
    entry: path.join(__dirname, './src/main.js'),
    // 打包后文件的存放目录
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 插件
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]-[hash:8]', 'sass-loader'] },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' },
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
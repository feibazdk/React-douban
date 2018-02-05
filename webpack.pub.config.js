const path = require('path');
// 在内存中生成一份 HTML 代码，
const htmlWebpackPlugin = require('html-webpack-plugin');
//导入每次删除文件夹的插件
const cleanWebpackPlugin = require('clean-webpack-plugin');
// 抽取 css 文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩 css 文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // 入门文件
    entry: {
        app: path.join(__dirname, './src/main.js'),
        vendors: ['jquery'] // 把要抽离的第三方包的名称，放到这个数组中
    },
    // 打包后文件的存放目录
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    // 插件
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: {
                // 压缩 HTML 代码
                collapseWhitespace: true,  // 合并空白字符
                removeComments: true, // 移除注释
                removeAttributeQuotes: true // 移除属性上的引号
            }
        }),
        new cleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'js/vendors.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            // 配置压缩选项
            compress: {
                warnings: false // 移除警告
            }
        }),
        new webpack.optimize.DedupePlugin({
            'process.env.NODE_ENV': 'production'
        }),
        new ExtractTextPlugin('css/styles.css'), // 抽取 css 文件
        new OptimizeCssAssetsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
                })
            },
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
                })
            },
            // limit 大于 5000，的图片，保留8位哈希，以本本来的名字和后缀结尾
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
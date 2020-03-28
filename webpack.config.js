const HtmlWebPackPlugin = require('html-webpack-plugin');
const path =  require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        // <script>引入自定义js方法
        // libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            },
            {
                  // 默写依赖JQ的插件，可能会存在使用script引入的方式
                test: require.resolve('jquery'), // 此loader配置项的目标是NPM中的jquery
                use: [{                         // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
                loader: 'expose-loader',
                options: '$'
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,// hot模式开启
        proxy: {
          '/': {
            target:"http://localhost:4000"
          }
        }
    },
    // 配合libraryTarget使用，使得require引入的方法可以获得JQuery对象
    // externals: {
    //     jquery: "jQuery"
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热模块替换开启
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: 'index.html' // 如果是main.html 那么访问http://localhost:8080/main.html
        }),
        // 只能解决require方式引入js，不能解决<script>引入js的方式 
        // 这个需要配合expose-loader这个loader来解决
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ]
}
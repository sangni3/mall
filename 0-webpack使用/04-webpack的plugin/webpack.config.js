const path = require('path')
const webpack = require('webpack')
const htmlWbepackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',//入口文件
    output:{
        path: path.resolve(__dirname, 'dist'),//动态获取打包后的文件路径,path.resolve拼接路径
        filename: 'bundle.js',

    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]//使用loader
            },
            {
                test: /\.(png|jpg|gif)$/,//匹配png/jpg/gif格式图片
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 8192,//图片小于8KB时候将图片转成base64字符串，大于8KB需要使用file-loader
                            name: '[name].[hash:8].[ext]'//img
                        }
                    },

                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('最终解释权归sangni3所有'),
        new htmlWbepackPlugin({
            template: 'index.html'})
    ]
}

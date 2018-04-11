const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugins = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react','react-dom','react-router-dom','redux','react-redux']
  },
  output: {
    path:path.join(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
        include:path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test:/\.(png|jpg|jpeg|gif)$/,
        use: [{
          loader:'url-loader',
          options: {
            limit:8192
          }
        }]
      }
    ]
  },
  plugins: [
    // html引入js
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname,'src/index.html')
    }),
    // 分离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 压缩js
    new UglifyJSPlugin(),
    // 环境变量为生产环境
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // 不改变公共库的名字
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),// 必须在下面之前引入
    new webpack.HashedModuleIdsPlugin(),
    // 删除dist目录重新生产
    new CleanWebpackPlugins(['dist']),
    // css提取
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    })

  ],
  resolve : {
    alias : {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    }
  }
};


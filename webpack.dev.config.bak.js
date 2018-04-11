const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log(webpack);


module.exports = {
  devtool: 'inline-source-map',
  // 入口
  entry : {
    // "react-hot-loader/patch",
    // path.join(__dirname, 'src/index.js')
    app: [
      path.join(__dirname,'src/index.js')
    ],
    vendor: ['react','react-dom','react-router-dom','redux','react-redux']
  },
  // 输出dist文件夹
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  // src文件夹下面的以.js结尾的文件，用babel解析
  // cacheDirectory是用来缓存编译结果，下次编译加速
  module: {
    rules : [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:8192
            }
          }
        ]
      }
    ]
  },
  resolve : {
    alias: {
      pages : path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname,'src/redux/reducers')
    }
  },
  devServer : {
    contentBase: path.join(__dirname, './dist'),
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    // hotOnly:true,
    hot: true, // 404 fallback
    // stats: 'errors-only', // 只在发生错误时输出
    // overlay : {
      // 当有编译错误或者警告的时候显示一个全凭overlay
      // errors: true,
      // warings : true
    // }
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    // 更新组件时，输出组件的路径而不是数字ID，用在开发模式
    new webpack.NamedModulesPlugin(),
    // html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    // js提取公共部分
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })

  ]
};
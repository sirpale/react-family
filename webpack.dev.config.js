const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname,'src/index.js')
    ]
  },
  output: {
    // 这里本来应该是chunkhash，但是和react-hot-loader不兼容
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    port: 3000,
    hot: true,
    host: '0.0.0.0'
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin()
  ]
};


module.exports = merge({
  customizeArray(a, b, key) {
    // entry.app不合并，全替换
    if(key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);
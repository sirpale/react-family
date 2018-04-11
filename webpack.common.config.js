const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

commonConfig = {
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: 'http://localhost/react/react-family/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include:path.join(__dirname, 'src')
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    }
  }

};


module.exports = commonConfig;

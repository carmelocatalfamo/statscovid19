const merge = require('webpack-merge')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge.strategy({ entry: 'prepend' })(common, {
  stats: 'errors-only',
  mode: 'production',
  output: {
    chunkFilename: '[name].bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
    mergeDuplicateChunks: true,
    splitChunks: {
      chunks: 'all',
      maxSize: 240000 // 240KB
    }
  },
  plugins: [
    new ExtractCssChunks({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ExtractCssChunks.loader, 'css-loader']
      }
    ]
  }
})

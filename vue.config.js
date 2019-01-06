const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  baseUrl: './',
  assetsDir: 'assets',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '/src/server'),
          to: path.join(__dirname, '/dist/server'),
          ignore: ['.*']
        }
      ])
    ]
  }
}

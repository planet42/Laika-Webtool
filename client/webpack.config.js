const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }  
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }]  
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader'
        }  
      }
    ]  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  
    })
  ],
  devServer: {
    proxy: {
      '/transform': 'http://localhost:8080'
    }
  }
}

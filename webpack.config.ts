const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: './js/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css'
    })
  ]
};

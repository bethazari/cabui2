
// # TODO: ESLint, Flow, normalize.css

const path = require('path');
const webpack = require('webpack');

// const ChunkHashPlugin = require('webpack-chunk-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const InlineManifestPlugin = require('inline-manifest-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  const config = {

    //entry: [
    //   'react-hot-loader/patch',
    //  './src/index',
    //],
    output: {
      path: path.resolve(__dirname, 'dist'),
    //   filename: environment.production ? 'js/[name].[chunkhash].js' : '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, 'src')],
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
    //   new webpack.EnvironmentPlugin({
    //     NODE_ENV: environment.production ? 'production' : 'development',
    //     SELF_URL: environment.url || 'http://localhost:3002',
    //   }),
      new HtmlWebpackPlugin({
        title: 'Coin32 cab UI',
        template: 'src/index.ejs',
        filename: 'index.html',
      }),
    ],
    // watchOptions: {
    //   poll: true,
    // },
  };

  // if (environment.production) {
  //   config.plugins = config.plugins.concat([
  //     new UglifyJSPlugin(),
  //     new ChunkHashPlugin(),
  //     new webpack.optimize.CommonsChunkPlugin({
  //       name: 'vendor',
  //       minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
  //     }),
  //     new webpack.optimize.CommonsChunkPlugin({
  //       name: 'manifest',
  //     }),
  //     new InlineManifestPlugin({
  //       name: 'webpackManifest',
  //     }),
  //   ]);
  // }
  if (argv.mode === 'development') {
    config.devServer = {
      host: '0.0.0.0',
      port: 3000,
  //     inline: true,
  //     overlay: true,
      hot: true,
      proxy: {
        '/api/2/*': {
          target: 'http://default.coin32-cab.demo.al.re/',
          changeOrigin: true,
          cookieDomainRewrite: 'localhost',
        },
      },
    };
    // # TODO: в случае сильного замедления скорости сборки сделать переключение через опции
    // запуска dev-сервера: разрабтаываем - юзаем eval-source-map, дебажим (в хроме)
    // - юзаем source-map
  //   config.devtool = 'source-map';

    config.plugins = config.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ]);
  }

  return config;
};

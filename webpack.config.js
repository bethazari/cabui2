
// # TODO: ESLint, Flow

const path = require('path');
const webpack = require('webpack');

const ChunkHashPlugin = require('webpack-chunk-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestPlugin = require('inline-manifest-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (environment = {}) => {
  const config = {

    entry: [
      'react-hot-loader/patch',
      './src/index',
    ],
    target: 'web',
    output: {
      path: `${__dirname}/dist`,
      filename: environment.production ? 'js/[name].[chunkhash].js' : '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          loaders: ['babel-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.EnvironmentPlugin({
        NODE_ENV: environment.production ? 'production' : 'development',
        SELF_URL: environment.url || 'http://localhost:3002',
      }),
      new HtmlWebpackPlugin({
        title: 'Appdater Admin',
        template: 'src/index.ejs',
        filename: 'index.html',
      }),
    ],
    watchOptions: {
      poll: true,
    },
  };

  if (environment.production) {
    config.output.publicPath = '/admin/';

    config.plugins = config.plugins.concat([
      new UglifyJSPlugin(),
      new ChunkHashPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      }),
      new InlineManifestPlugin({
        name: 'webpackManifest',
      }),
    ]);
  } else {
    config.devServer = {
      overlay: true,
      hot: true,
      proxy: {
        '/api/2/*': {
          target: 'http://default.coin32-cab.demo.al.re/',
          changeOrigin: true,
        },
      },
    };
    // # TODO: в случае сильного замедления скорости сборки сделать переключение через опции запуска dev-сервера:
    // разрабтаываем - юзаем eval-source-map, дебажим (в хроме) - юзаем source-map
    config.devtool = 'source-map';

    config.plugins = config.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]);
  }

  return config;
};

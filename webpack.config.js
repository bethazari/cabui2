
// # TODO: ESLint, Flow, normalize.css

const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const config = {

    //entry: [
    //   'react-hot-loader/patch',
    //  './src/index',
    //],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: argv.mode === 'production' ? 'js/[name].[chunkhash].js' : '[name].js',
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
      new HtmlWebpackPlugin({
        title: 'Coin32 cab UI',
        template: 'src/index.ejs',
        filename: 'index.html',
      }),
    ],
  };

  if (argv.mode === 'production') {
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendors: {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
      runtimeChunk: true,
    };
  }
  if (argv.mode === 'development') {
    config.devServer = {
      host: '0.0.0.0',
      port: 3000,
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
    config.devtool = 'source-map';

    config.plugins = config.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ]);
  }

  return config;
};

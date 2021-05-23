const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    'cuki': './src/cuki.ts',
    'cuki.min': './src/cuki.ts',
  },
  bail: true,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'cuki',
      type: 'umd',
      export: 'default',
    },
    clean: true,
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
          include: /\.min\.js$/
      }),
    ],
  },
};

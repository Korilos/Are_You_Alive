const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Change to your main entry point
  parallelism: 1,  // Reduce to 1 to limit resource usage
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
  extensions: ['.js', '.jsx'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9005,
  },
};

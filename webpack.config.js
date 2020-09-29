const path = require('path');

module.exports = {
   entry: 
   {
      home: './src/index.js',
      forum: './src/projects.js',
      signUp: './src/signUpIndex.js',
      commmunityHome: './src/communityIndex.js'
   },
   output: {
      path: __dirname + '/bundle',
      filename: '[name].bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env', '@babel/preset-react']
            }
         }
      ]
   },
};


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: 
   {
      'contactus-techgnosis-webflow/index.html': './src/index.js',
      'contactus-techgnosis-webflow/projects.html':'./src/forumLandingPage.js'
   },
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
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
   plugins:[
      new HtmlWebpackPlugin({
         template: './contactus-techgnosis-webflow/index.html'
      })
   ]
}
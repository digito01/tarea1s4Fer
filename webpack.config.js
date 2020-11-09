const path = require('path');
const HtmlWebpackPlugin = require('Html-Webpack-Plugin');

module.exports = {

    entry : {
        app: [
            "@babel/polyfill",
            './src/app/index.js'
        ]
    },
    output: {  
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]

};
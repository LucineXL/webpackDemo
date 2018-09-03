const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
//   output: {
//     publicPath: '/'
// },
  module: {
    rules: [
        {
            test: /\.js$/,
            include: path.resolve(__dirname, '../src'),
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader', //是指定使用的loader和loader的配置参数
                    options: {
                        limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
                        name: 'images/[name]_[hash:7].[ext]',
                        // publicPath:"../",
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
            'file-loader'
            ]
        },
        {
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
        },
        {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
        }
    ]
  },
  plugins: [],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};
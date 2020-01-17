var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   entry: "./src/index.jsx", // входная точка - исходный файл
   output:{
       path: path.resolve(__dirname, 'build'),     // путь к каталогу выходных файлов - папка build
       publicPath: path.resolve(__dirname, '/build/'),
       filename: "bundle.js"       // название создаваемого файла
   },
   devServer:{
       contentBase: path.resolve(__dirname, 'build'),
       publicPath: '/',
       proxy: {
       '/api': {
           target: 'http://localhost:3000',
           secure: false
         }
       }
   },
   module:{
        rules:[
           {    //загрузчик для jsx
               test: /\.jsx$/, // определяем тип файлов
               exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
               loader: "babel-loader",   // определяем загрузчик
               options:{
                   presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
               }
           },
           {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }))
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                }))
            }
        ]
   },
   plugins: [
       new ExtractTextPlugin('style.css')
   ]
}

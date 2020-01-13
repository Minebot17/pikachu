var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   entry: "./src/index.jsx", // входная точка - исходный файл
   output:{
       path: path.resolve(__dirname, './build'),     // путь к каталогу выходных файлов - папка build
       publicPath: '/build/',
       filename: "bundle.js"       // название создаваемого файла
   },
   devServer: {
     inline:true,
     port: 3000,
     historyApiFallback: true,
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
   },
   plugins: [
       new ExtractTextPlugin('style.css')
   ]
}

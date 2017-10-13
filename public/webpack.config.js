var webpack = require('webpack');

module.exports = {
    entry : {
        BillCreate : __dirname + '/js/BillCreate.js',
        home : __dirname + '/js/home.js',
        enter :  __dirname + '/js/enter.js'
    },
    output : {
        path : __dirname + '/js/main',
        filename : '[name].main.js'
    },
    module : {
        loaders : [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.hbs$/, loader: 'handlebars-loader'}
        ]
    }
}

//启动命名 webpack --progress --watch --color
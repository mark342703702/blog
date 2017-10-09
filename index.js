var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
var routes = require('./routes/index');
var config = require('config');
var winston = require('winston');
var expressWinston = require('express-winston');
var path = require('path');
var favicon = require('serve-favicon');

app.use(express.static(__dirname + '/public'));

app.engine('hbs', exphbs({
    extname: '.hbs',// 模版文件使用的后缀名
    layoutsDir: 'views/layouts/',//设置布局模版文件的目录为 views 文件夹
    partialsDir: 'views/partials', // 组件模板位置
    defaultLayout: 'layout',//设置默认的页面布局模版为 layout.hbs 文件
}));

//设置网站logo
app.use(favicon(__dirname + '/public/favicon.ico'));

app.set('view engine', 'hbs');//设置模板引擎

app.set('port', process.env.PORT || config.port);//设置端口

// 正常请求的日志
app.use(expressWinston.logger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/success.log'
    })
  ]
}));

//路由
routes(app);

//记录正常请求日志的中间件要放到 routes(app) 之前
//记录错误请求日志的中间件要放到 routes(app) 之后

// 错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'logs/error.log'
    })
  ]
}));

//定制404页面 
app.use(function(req, res){

     res.type('text/plain');
     res.status(404);
     res.send('404 - Not Found');

});

//定制505页面   
app.use(function(err, req, res, next){

     console.log(err.stack);
     res.type('text/plain');
     res.status(500);
     res.send('500 - Server Error');

});

app.listen(app.get('port'), function(){
   console.log('app starts on http://localhost:'+ app.get('port'));
   //console.log(__dirname);
});
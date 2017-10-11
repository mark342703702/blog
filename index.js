var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
var routes = require('./routes/index');
var config = require('config');
var winston = require('winston');
var expressWinston = require('express-winston');
var path = require('path');
var favicon = require('serve-favicon');
var db = require('./mongodb/db');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
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

app.use(session({
		name : config.session.key,// 设置 cookie 中保存 session id 的字段名称
		secret : config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
		cookie: {
       maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
     },
		store: new MongoStore({// 将 session 存储到 mongodb
            url: config.mongodb// mongodb 地址
       }),
		resave: true,  //强制更新 session
		saveUninitialized: false // 设置为 false，强制创建一个 session，即使用户未登录
	}));

// flash 中间件，用来显示通知
app.use(flash()); 

// 设置模板全局常量
app.locals.blog = {
    title: '小时代',
    description: '一站式儿童品牌集合店'
};

app.use(function (req, res, next) {
    res.locals.user = req.session.user;
		res.locals.success = req.flash('success').toString();
		res.locals.error = req.flash('error').toString();
		next();
});

// 正常请求的日志
// app.use(expressWinston.logger({
//   transports: [
//     new (winston.transports.Console)({
//       json: true,
//       colorize: true
//     }),
//     new winston.transports.File({
//       filename: 'logs/success.log'
//     })
//   ]
// }));

//路由
routes(app);

//记录正常请求日志的中间件要放到 routes(app) 之前
//记录错误请求日志的中间件要放到 routes(app) 之后

// 错误请求的日志
// app.use(expressWinston.errorLogger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     }),
//     new winston.transports.File({
//       filename: 'logs/error.log'
//     })
//   ]
// }));

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
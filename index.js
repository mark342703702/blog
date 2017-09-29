var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
var routes = require('./routes/index');

app.engine('hbs', exphbs({
    extname: '.hbs',// 模版文件使用的后缀名
    layoutsDir: 'views/layouts/',//设置布局模版文件的目录为 views 文件夹
    partialsDir: 'views/partials', // 组件模板位置
    defaultLayout: 'layout',//设置默认的页面布局模版为 layout.hbs 文件
}));

app.set('view engine', 'hbs');//设置模板引擎

app.set('port', process.env.PORT || 3000);//设置端口

app.use(express.static(__dirname + '/public'));

routes(app);

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
   console.log(__dirname);
});
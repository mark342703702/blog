module.exports = function(app) {
    
    app.get('/', function (req, res) {
        res.redirect('/home');
    });
    
    app.use('/home', require('./home')); // 主页路由
    app.use('/user', require('./user')); // 用户路由
    app.use('/bill', require('./bill')); // 账单路由 
    app.use('/count', require('./count')); //数据统计路由
}
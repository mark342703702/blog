module.exports = function(app) {
    
    app.get('/', function (req, res) {
        res.redirect('/home');
    });
    
    app.use('/home', require('./home')); // 主页路由
    app.use('/user', require('./user')); // 用户路由
    
}
var checkLogin = require('../middlewares/check').checkLogin;
var checkNotLogin = require('../middlewares/check').checkNotLogin;
module.exports = function(app) {
    app.get('/', function (req, res) {
      res.redirect('/home');
    });

    app.use('/home', checkLogin,require('./home')); // 主页路由

    app.use('/user', require('./user')); // 用户路由
    
    app.use('/bill',  checkLogin,require('./bill')); // 账单路由 
    app.use('/count', checkLogin, require('./count')); //数据统计路由
    app.use('/enter', checkLogin, require('./enter')); //入库路由
}
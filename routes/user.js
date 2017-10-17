var express = require('express');
var router = express.Router();
var AdminModel = require('../models/admin');
var productModel = require('../models/product');
var billModel = require('../models/bill');
var crypto = require('crypto');
var config = require('config');
var checkNotLogin = require('../middlewares/check').checkNotLogin;
var swal = require('sweetalert');
router.get('/login', checkNotLogin, function(req, res){
  // billModel.Addbill({
  //   saler : {
  //   QQ : '234',
  //   user_name : '23',
  //   password : '213',
  //   position : 'boss',
  //   Aid : 2,
  //   shop : 0 },
  //   location : 1,
  //   item : {
  //     Pid : '2323',
  //     description : '123',
  //     sale_price : 12,
  //     stock : 12,
  //     buyin_price : 12,
  //     category : 'shoes'
  //   }
  // });
  
  // AdminModel.addAdmin({
  //   QQ : '333',
  //   user_name : 'asd',
  //   password : '333',
  //   position : 'boss',
  //   Aid : 2,
  //   shop : 1
  // });

  // productModel.Addproduct({
  //     Pid : '2323',
  //     description : '123',
  //     sale_price : 34.5,
  //     stock : 12,
  //     buyin_price :34.5,
  //     category : 'shoes'
  // });
  res.render('Login', {layout : null});
});

router.get('/logout', function(req, res){
      // 清空 session 中用户信息
      req.session.user = null;
      res.redirect('/user/login');
});

router.post('/login', function(req, res, next){
   var QQ = req.fields.QQ || '';
   var password = req.fields.password || '';

   if(QQ === ''){
       req.flash('error','QQ不能为空');
       return res.redirect('/user/login');
   }

   if(password === ''){
       req.flash('error','密码不能为空');
       return res.redirect('/user/login');
   }
      
   AdminModel.findAdmin({'QQ' : QQ}).then( user => {
        if(user.length == 0){
          req.flash('error','用户不存在');
          return res.redirect('/user/login');
        }

        if(crypto.createHmac('sha256', config.cryptoSecret).update(password).digest('hex') !== user[0].password){
          req.flash('error','用户名或密码错误');
          return res.redirect('/user/login');
        }

        req.flash('success', '登录成功');
        delete user[0].password;
        req.session.user = user[0];
        res.redirect('/home');

   }).catch(next);

});

module.exports = router;
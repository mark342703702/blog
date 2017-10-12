var express = require('express');
var router = express.Router();
var AdminModel = require('../models/admin');
var productModel = require('../models/product');
var billModel = require('../models/bill');

router.get('/login', function(req, res){
  
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
  //   QQ : '123',
  //   user_name : 'asd',
  //   password : '123',
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

module.exports = router;
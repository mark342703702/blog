var express = require('express');
var router = express.Router();
var xl = require('node-xlrd');

router.get('/', function(req, res, next) {
    var data = {
      page : 'home'
    };
    
    res.render('home', data);
});



module.exports = router;
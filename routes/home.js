var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var data = {
      page : 'home'
    };
    res.render('home', data);
});





module.exports = router;
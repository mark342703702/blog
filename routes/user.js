var express = require('express');
var router = express.Router();

router.get('/login', function(feq, res){
  res.render('Login', {layout : null});
});

module.exports = router;
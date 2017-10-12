var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = {
    page : 'enter'
  }
  res.render('enter', data);
});

module.exports = router;
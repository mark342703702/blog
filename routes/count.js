var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = {
    page : 'count'
  }
  res.render('count', data);
});

module.exports = router;
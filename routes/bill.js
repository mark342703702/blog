var express = require('express');
var router = express.Router();

router.get('/BillCreate', function(req, res) {
  var data = {
    page : 'BillCreate'
  }
  res.render('BillCreate', data);
});

module.exports = router;
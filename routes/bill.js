var express = require('express');
var router = express.Router();

router.get('/BillCreate', function(req, res) {
  res.render('BillCreate');
});

module.exports = router;
var express = require('express');
var router = express.Router();
var xl = require('node-xlrd');
var productModel = require('../models/product');
router.get('/', function(req, res) {
  var data = {
    page : 'enter'
  };
  res.render('enter', data);
});

router.get('/upload', function(req, res){
    var data = {
      page : 'enter'
    };
    res.render('enter/upload', data);
});

router.post('/upload', function(req, res){
    var excel = req.files.excel || '';
    var path = excel.path;
    var datas = [];
    xl.open(path, function(err,bk){
    if(err){console.log(err.name, err.message); return;}
    
    var shtCount = bk.sheet.count;
    for(var sIdx = 0; sIdx < shtCount; sIdx++ ){
        console.log('sheet:', sIdx);
        console.log('check loaded :'+ bk.sheet.loaded(sIdx) );
        var sht = bk.sheets[sIdx],
            rCount = sht.row.count,
            cCount = sht.column.count;
        console.log('  name = %s; index = %d; rowCount = %d; columnCount = %d', sht.name, sIdx, rCount, cCount);
        for(var rIdx = 0; rIdx < rCount; rIdx++){
            var data = [];
            var temp = {};
            for(var cIdx = 0; cIdx < cCount; cIdx++){
              try{
              data[cIdx] = sht.cell(rIdx,cIdx);
              console.log('  cell : row = %d, col = %d, value = "%s"', rIdx, cIdx, sht.cell(rIdx,cIdx));
              }catch(e){
                console.log(e.message);
              }
            }

            temp.Pid = data[0];
            temp.description = data[1];
            temp.stock = data[2];
            temp.buyin_price = data[3];
            temp.sale_price = data[3];
            temp.category = data[4];
            productModel.Addproduct(temp);
            datas[rIdx] = data;
        }
    }

  });
    res.send(datas);
});

router.get('/xl', function(req, res){
  var path = 'public/upload/test.xls';
  var datas = [];
  xl.open(path, function(err,bk){
    if(err){console.log(err.name, err.message); return;}
    
    var shtCount = bk.sheet.count;
    for(var sIdx = 0; sIdx < shtCount; sIdx++ ){
        console.log('sheet:', sIdx);
        console.log('check loaded :'+ bk.sheet.loaded(sIdx) );
        var sht = bk.sheets[sIdx],
            rCount = sht.row.count,
            cCount = sht.column.count;
        console.log('  name = %s; index = %d; rowCount = %d; columnCount = %d', sht.name, sIdx, rCount, cCount);
        for(var rIdx = 0; rIdx < rCount; rIdx++){
            var data = [];
            for(var cIdx = 0; cIdx < cCount; cIdx++){
              try{
              data[cIdx] = sht.cell(rIdx,cIdx);
              console.log('  cell : row = %d, col = %d, value = "%s"', rIdx, cIdx, sht.cell(rIdx,cIdx));
              }catch(e){
                console.log(e.message);
              }
            }
            datas[rIdx] = data;
        }
    }

  });
  res.send('xl');
});

module.exports = router;
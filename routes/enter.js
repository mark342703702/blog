var express = require('express');
var router = express.Router();
var xl = require('node-xlrd');
router.get('/', function(req, res) {
  var data = {
    page : 'enter'
  }
  res.render('enter', data);
});

router.get('/upload', function(req, res){
   res.render('enter/upload');
});

router.post('/upload', function(req, res){
    var excel = req.files.excel || '';
    console.log(excel.name);
    res.send('s');
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
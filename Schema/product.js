var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId; 

var options = {
  autoIndex: false // 禁止自动创建索引
};

//设置售价
var sale_price_set = function(val){
   val = Math.round(val * 1.6);
   return (Math.floor(val / 10)*10 + 9);
}


var productSchema = new Schema({
    //商品编号
    Pid : {type : String, required: true},
    //商品描述
    description : String,
    //库存(最小为零)
    stock : {type : Number, min:0, max : 1000, required : true},
    //进价
    buyin_price : {type : Number, min : 0, required : true},
    //售价
    sale_price : {type : Number, min : 0, required : true, set : sale_price_set},
    //类别
    category : {type : String, enum : ['shoes', 'coat', 'sweater', 'T', 'pants', 'skirt', 'bag', 'other'], required : true},
    //商品所在店铺,1代表小店, 2代表大店
    store : {type : String, enum : [1, 2], required : true}
}, options);

exports.productSchema = productSchema;
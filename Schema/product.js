var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId; 
var options = {
  autoIndex: false // 禁止自动创建索引
};

var productSchema = new Schema({
    //商品编号
    Pid : {type : String, required: true},
    //商品描述
    description : String,
    //售价
    sale_price : {type : Number, min : 0, required : true},
    //库存(最小为零)
    stock : {type : Number, min:0, max : 1000, required : true},
    //进价
    buyin_price : {type : Number, min : 0, required : true},
    //类别
    category : {type : String, enum : ['shoes', 'coat', 'sweater', 'T', 'pants', 'skirt', 'bag', 'other'], required : true}
}, options);

exports.productSchema = productSchema;
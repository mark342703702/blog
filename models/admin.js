var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId; 
var option = {
  _id: false,  //禁止生成_id主键
  autoIndex: false // 禁止自动创建索引
}

var adminSchema = new Schema({
    user_name : String,
    
}, option);


var Admin = mongoose.model('Admin', adminSchema);

exports.Admin = Admin;

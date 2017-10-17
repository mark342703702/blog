var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var config = require('config');
var setPasswordCrtpto = function(val){
    var hash = crypto.createHmac('sha256', config.cryptoSecret)
                     .update(val)
                     .digest('hex');
    return hash;
}

var options = {
  autoIndex: false // 禁止自动创建索引
}

var adminSchema = new Schema({
    //QQ
    QQ : { type: String, unique: true, required: true},
    //昵称
    user_name : { type: String, required: true},
    //密码
    password : { type: String,  required: true, set : setPasswordCrtpto},
    //职位
    position : { type : 'String', enum : ['boss', 'employee'], required: true},
    //工号
    Aid : {type : Number, min : 0, max : 100, unique: true, required: true},
    //所属店铺, 1代表小店, 2代表大店, 0代表不属于任何店
    shop : {type : Number, enum : [1, 2, 0], required: true}
}, options);

exports.adminSchema = adminSchema;

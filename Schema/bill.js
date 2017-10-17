var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId; 
var adminSchema = require('./admin').adminSchema;
var productSchema = require('./product').productSchema;

var billSchema = new Schema({
    //订单完成者
    saler : {type : adminSchema, required: true},
    //订单日期
    date : {type : Date, default : Date.now},
    //订单完成店铺, 1代表小店, 2代表大店
    location : {type : Number, enum : [1, 2], required : true},
    //订单商品
    item : {type : [productSchema], required: true}
    
}, { autoIndex: false});

exports.billSchema = billSchema;
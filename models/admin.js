var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId; 
var adminSchema = require('../Schema/admin').adminSchema;

//添加管理员
adminSchema.statics.addAdmin = function(admin){
    return this.create(admin, function(err){
        if(err) return console.log(err);
        // console.log('success');
    });    
}

//查找管理员数据
adminSchema.statics.findAdmin = function(conditions){
    return this.find(conditions, function(err,docs){
        if(err) return console.log(err);
        console.log(docs);
    });
}



var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

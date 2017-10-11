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



var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

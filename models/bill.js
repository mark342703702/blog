var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId; 
var billSchema = require('../Schema/bill').billSchema;

billSchema.statics.Addbill = function(bill){
    return this.create(bill, function(err){
        if(err) return console.log(err);
        // console.log('success');
    });
}

var bill = mongoose.model('bill', billSchema);

module.exports = bill;
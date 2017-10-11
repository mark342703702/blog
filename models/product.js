var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId; 
var productSchema = require('../Schema/product').productSchema;

productSchema.statics.Addproduct = function(product){
    return this.create(product, function(err){
        if(err) return console.log(err);
        // console.log('success');
    })
}

var product = mongoose.model('product', productSchema);

module.exports = product;
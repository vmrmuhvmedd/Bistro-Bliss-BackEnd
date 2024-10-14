const mongoose = require('mongoose')
const { any } = require('../utilites/productImageUpload')

const productsSchema = mongoose.Schema({
    // id  : Number,
    // image : String,
    productImage : String,
    price : Number,
    title : String,
    category : String,
    info : String,
    RegisteredAt : {type : Date, default : Date.now()}
})

const productModel = mongoose.model('Product',productsSchema)

module.exports = productModel
const { body } = require('express-validator')
const Product = require('./../models/productModel')

const productsValidation = ()=>{
    return [
        body('title').notEmpty().custom( async (value)=>{
            let products = await Product.findOne({title : value})
            if(products) {
                throw('Already Exists')
            }
        })
    ]
}

module.exports = productsValidation
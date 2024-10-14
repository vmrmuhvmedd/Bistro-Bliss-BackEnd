const express = require('express')
const router = express.Router()
const productsController = require('./../controllers/productsController')
const productsValidation = require('./../validations/productsValidation')
const usersMiddleware = require('./../middlewares/usersMiddleware')
const upload = require('./../utilites/productImageUpload')
router.route('/')
    .get(productsController.getAllProducts)
    .post( upload.single('productImage'), productsValidation(),productsController.addProduct)
    // .post(usersMiddleware, productsValidation(),productsController.addProduct)
router.route('/:id')
    .get(productsController.getSingleProducts)
    .patch(productsController.updateProduct)
    .delete(productsController.deleteProduct)

module.exports = router    

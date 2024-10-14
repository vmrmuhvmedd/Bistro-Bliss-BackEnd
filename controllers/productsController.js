const Product = require('./../models/productModel')
const {validationResult} = require('express-validator')


const addProduct = async (req, res) => {
    try {
        let newProductData = req.body;
        let productMainImg = req.file;

        let validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return res.status(400).json({ errors: validationError.array() });
        }

        if (!productMainImg) {
            return res.status(400).json({ msg: 'Product image is required' });
        }

        const fullImagePath = `${req.protocol}://${req.get('host')}/${productMainImg.path}`;

        await Product.create({ ...newProductData, productImage: fullImagePath });
        
        res.status(201).json({ msg: 'Product added successfully' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal server error', error: error.message });
    }
};



const getAllProducts = async (req,res)=>{
    let products = await Product.find({})
    res.json(products)
}

const getSingleProducts = async (req,res)=>{
    let id = req.params.id
    let intendeProduct = await Product.findOne({_id : id})
    res.json(intendeProduct || {msg : "Not Found"})
}

const updateProduct = async (req,res)=>{
    let id = req.params.id
    let newProductData = req.body
    let updated = await Product.updateOne({_id : id},newProductData)
    res.json(updated)
}

const deleteProduct = async (req,res)=>{
    let id = req.params.id
    let deleted = await Product.deleteOne({_id : id})
    res.json(deleted) 
}

module.exports = {
    addProduct,
    getAllProducts,
    getSingleProducts,
    deleteProduct,
    updateProduct
}

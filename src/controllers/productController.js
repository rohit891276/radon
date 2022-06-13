const ProductModel = require('../models/productDocumentModel.js')


const createProduct = async function(req, res){
    const  productData =  await ProductModel.create(req.body)
    res.send({msg: productData})
}

module.exports.createProduct = createProduct
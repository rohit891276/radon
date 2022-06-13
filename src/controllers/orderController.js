const OrderModel = require('../models/orderDocumentModel.js')
const UserModel = require('../models/userDocumentModel.js')
const ProductModel = require('../models/productDocumentModel.js')

const createOrder = async function(req, res){
    let user_id = req.body.userId
    let product_id = req.body.productId
    
    if(!userInfo){
    res.send({Error: "The userId and are not valid"})
    }else{
        res.send({msg: "The userId is matched"})
    }
    if(!productInfo){
    res.send({Error: "The productId and are not valid"})
    
    }else{
        res.send({msg: "The productId is matched"})
    }
    //const userInfo = await OrderModel.findById(user_id)
    const productInfo = await ProductModel.findById(product_id)

    const  productData =  await OrderModel.create(req.body)
    res.send({msg: productData})

 

}


module.exports.createOrder = createOrder
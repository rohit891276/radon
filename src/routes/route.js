const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser", UserController.createUser)
router.post("/createProduct", ProductController.createProduct)
router.post("/createOrder", OrderController.createOrder)
  

router.post("/basicRoute", commonMW.mid1, UserController.createUser)

router.get("/basicRoute2", commonMW.mid1, OrderController.createOrder)

module.exports = router;
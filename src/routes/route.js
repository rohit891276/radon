const express = require('express')
const router = express.Router()
const commonMid = require("../middlewares/commonMiddlewares")
const UserController = require("../controllers/userController")

router.get('/getLoggedData', commonMid.ctipData,  UserController.basicCode)

module.exports = router;
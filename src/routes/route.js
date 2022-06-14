const express = require('express')
const router = express.Router();

const UserController = require("../controllers/userController.js")
const AuthMiddle = require("../authMiddleware/auth.js")
router.post("/createUser", UserController.createUser)
router.post("/userLogin", UserController.userLogin)
router.get("/getUserDetails/:userId", UserController.getUserDetails)
router.put("/updateUser/:userId", AuthMiddle.authMid, UserController.updateUser)
router.delete("/deleteUser/:userId", AuthMiddle.authMid, UserController.deleteUser)
module.exports = router;

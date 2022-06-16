const express = require('express')
const router = express.Router();

const UserController = require("../controllers/userController.js")
const AuthMiddle = require("../middlewares/auth.js")

router.post("/createUser", UserController.createUser)
router.post("/userLogin", UserController.userLogin)
router.get("/getUserDetails/:userId", AuthMiddle.authenticate, UserController.getUserDetails)
router.put("/updateUser/:userId", AuthMiddle.authenticate, UserController.updateUser)
router.delete("/deleteUser/:userId", AuthMiddle.authenticate, UserController.deleteUser)
router.post("/users/:userId/post", AuthMiddle.authenticate, UserController.postMessage)
module.exports = router;
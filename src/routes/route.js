const express = require('express');
const router = express.Router();
const bookApi = require('../models/userModel')

// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

const UserModel= require("../models/userModel.js")
const BooksController= require("../controllers/userController")

/*  router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/bookApi", async function (req, res) {\
    res.send("Books details are:")
    
}) */



//router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)


router.post("/createBooks", BooksController.createBook)
router.get("/getBookDatas", BooksController.getBookData)

module.exports = router;
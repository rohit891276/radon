const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController")
const BlogController = require("../controllers/blogController")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", AuthorController.createAuthor)

router.post("/createBlog", BlogController.createBlog)

router.get("/getAllBlogs", BlogController.getAllBlogs)

router.put("/blog/:blogId", BlogController.updateBlog)

router.delete("/blogs/:blogId", BlogController.deleteByParams)

router.delete("/blogs", BlogController.deletedByQuery)



module.exports = router;
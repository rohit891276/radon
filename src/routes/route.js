const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorController');
const BlogController = require('../controllers/blogController');
const middleware = require('../middleware/auth');

router.post('/authors', AuthorController.createAuthor);

router.post('/blogs', middleware.authenticate, BlogController.createBlog);

router.get('/blogs', middleware.authenticate, BlogController.getAllBlogs);

router.put('/blogs/:blogId', middleware.authorise, middleware.authenticate, BlogController.updateBlog);

router.delete('/blogs/:blogId', middleware.authorise, middleware.authenticate, BlogController.deleteByParams);

router.delete('/blogs', middleware.authorise, middleware.authenticate, BlogController.deletedByQuery);

router.post('/login', AuthorController.loginAuthor);

module.exports = router;
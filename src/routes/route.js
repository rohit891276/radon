const express = require('express');
const router = express.Router();

const UrlController = require('../controllers/urlController.js');

router.post('/url/shorten', UrlController.createUrl)

module.exports = router;
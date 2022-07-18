const UrlModel = require('../models/urlModel.js');
//const ShortId = require('shortid');

const createUrl = async (req, res) => {
    const data = req.body;
    
    const urlCreated = await UrlModel.create(data);
    res.status(201).send({status: true, data: urlCreated})  

}

module.exports.createUrl = createUrl;

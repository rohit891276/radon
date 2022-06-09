const newAuthorModel = require("../models/newAuthorModel")



const createNewAuthor= async function (req, res) {
    let newAuthor = req.body
    let newAuthorCreated = await newAuthorModel.create(newAuthor)
    res.send({data: newAuthorCreated})
}

module.exports.createNewAuthor = createNewAuthor
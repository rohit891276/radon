const AuthorModel = require("../models/authorModel.js");

const createAuthor = async function (req, res) {
    try {
        const authorData = req.body
        if (Object.keys(authorData).length != 0) {
            const savedData = await AuthorModel.create(authorData)
            res.status(201).send({ Status: true, Msg: savedData })
        } else {
            res.status(400).send({ Status: false, Msg: "BAD REQUEST" })
        }
    }
    catch (err) {
        res.status(500).send({ Status: "SERVER ERROR", Msg: err.message })
    }
}

module.exports.createAuthor = createAuthor
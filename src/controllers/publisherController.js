

const newPublisherModel= require("../models/newPublisherModel")

const createNewPublisher= async function (req, res) {
    let newPublisher = req.body
    let newPublisherCreated = await newPublisherModel.create(newPublisher)
    res.send({data: newPublisherCreated})
}

module.exports.createNewPublisher = createNewPublisher
const newBookModel= require("../models/newBookModel")
const newPublisherModel= require("../models/newPublisherModel")
const newAuthorModel = require("../models/newAuthorModel")



const createBook= async function (req, res) {

    // FOR AUTHOR

    let book = req.body
    let authorId = req.body.author_id
    let publisherId = req.body.publisher_id

    if(!authorId){
        res.send({Error: "Please enter author Id"})
    }

const authorInfo= await newAuthorModel.findById(authorId)
    if (!authorInfo){
        res.send({Error: "Please enter a valid Author ID"})
    }

    //FOR PUBLISHER

    if(!publisherId){
        res.send({Error: "Please enter publisher ID"})
    }
const publisherInfo = await newPublisherModel.findById(publisherId)
    if(!publisherInfo){
        res.send({Error: "Please enter a valid publisher ID"})
    }
let bookCreated = await newBookModel.create(book)
res.send({data: bookCreated})
    
}


// Q4

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}
module.exports.createBook = createBook 
 
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

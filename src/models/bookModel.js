const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author_id: Number,
    price: String,
    rating: Number,
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books




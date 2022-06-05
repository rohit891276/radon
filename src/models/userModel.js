const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {    // new object is created because of new

    bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true
    }



  /*   mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number, */

    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
    
}, { timestamps: true });


const bookApi =  mongoose.model('Book', bookSchema) //users

module.exports = bookApi



// String, Number
// Boolean, Object/json, array
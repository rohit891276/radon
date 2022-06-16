const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        require: true,
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    age: Number,
    posts: {
        type:[],
        default:[]
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
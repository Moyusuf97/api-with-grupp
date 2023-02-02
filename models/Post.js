const mongoose = require('mongoose');

const ehandelSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    Image: {
        type: String,
        required: false
    },
    Category: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Ehandel', ehandelSchema); 
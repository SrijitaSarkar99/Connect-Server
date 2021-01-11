const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model('Branch', branchSchema)
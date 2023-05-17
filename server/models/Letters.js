const mongoose = require('mongoose')
const Schema = mongoose.Schema

const letterSchema = new Schema({
    size: { type: String, required: true },
    type: { type: String, required: true },
    font: { type: String, required: true },
    letters: {
        type: [{
            sym: {type: String, required: true},
            totalStock: Number,
            numAvailable: Number
        }],
        required: true

    },
    

})

module.exports = mongoose.model('Letter', letterSchema)
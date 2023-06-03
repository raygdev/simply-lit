const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { symbols } = require("./utils/letters.utils")

const letterSchema = new Schema({
    size: { type: String, required: true },
    type: { type: String, required: true },
    font: { type: String, required: true },
    letters: {
        type: [{
            sym: { type: String, required: true },
            totalStock: { type: Number, default: 0 },
            numAvailable: { type: Number, default: 0 }
        }],
        required: true,
        default: symbols

    },
    

})

const Letters = mongoose.model('Letters', letterSchema)
module.exports = {Letters}
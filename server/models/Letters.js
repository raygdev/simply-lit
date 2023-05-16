const mongoose = require('mongoose')
const Schema = mongoose.Schema

const letterSchema = new Schema({
    size: Number,
    type: String,
    font: String,
    letters: {
        type: [{
            type: String,
            symb: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "!", "#", "$", "&", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
        }],
        required: true,
        quantity: {
            totalStock: Number,
            numAvailable: Number
        }

    },
    

})

module.exports = mongoose.model('Letter', letterSchema)
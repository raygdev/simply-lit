/**
 * GET /letters
 * 
 * responds with json array of all letters with type and size
 * will provide filters with queries to this route
 */

const { Letters } = require("../../models/Letters.js")


exports.getAllLetters = async (req, res) => {
    try{
        const filter = {}
        
        if(req.query.size){

            filter.size = req.query.size
        }

        if(req.query.type){
            filter.type = req.query.type
        }

        const letters = await Letters.find(filter).exec()

    
        res.json(letters)

    } catch (e) {
        res.status(500).json({error: `There was an error: ${e}`})
    }
}

/**
 * GET /letters/:id
 * 
 * responds with json for the specific type and
 * size based on the id.
 */

exports.getLettersById = async (req, res) => {
    try {
        const letterId = req.params.id
        const letters = await Letters.findById(letterId).exec()
        res.json(letters)
    } catch (e) {
        res.status(500).json({error: `There was an error: ${e}`})
    }
}

/**
 * POST /letters
 * 
 * will create the letters model, and respond
 * with json with the newly created letters model
 */

exports.createLetters = async (req, res) => {
    try {
        const { size, type, font, letters } = req.body
        const newLetter = new Letters({ size, type, font, letters })
        await newLetter.save()

        res.status(201).json(newLetter)
    } catch (e) {
        res.status(501).json(`${e}: Internal server error`)
    }
}

/**
 * PUT /letters/:id
 * 
 * will updated the inventory of letters
 * to add or subtract from totalStock and
 * numberAvailable
 */

exports.updateLetters = async (req, res) => {
    try {
        const { id } = req.params
        const { quantity } = req.body

        const letter = await Letters.findById(id)

        if(!letter){
            return res.status(404).json({ error:'Letter not found'})
        }
        // These will be adjusted later to not have them hard coded as an increment
        // as they may also be decremented
        letter.totalStock += quantity
        letter.numberAvailable += quantity

        await letter.save()
    } catch (e) {
        res.status(500).json({e: 'Internal Server Error'})
    }
}

/**
 * DELETE /letters/:id
 * 
 * in case we want to delete a specifi size and
 * type all together.
 */

exports.deleteById = async (req, res) => {
    try {
       
    } catch (e) {
        
    }
}
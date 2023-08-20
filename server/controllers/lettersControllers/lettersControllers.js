/**
 * GET /letters
 *
 * responds with json array of all letters with type and size
 * will provide filters with queries to this route
 */

const { Letters } = require("../../models/Letters.js")
const { handleMongooseErrors } = require("./utils.js")

exports.getAllLetters = async (req, res) => {
  try {
    const filter = {}

    if (req.query.size) {
      filter.size = req.query.size
    }

    if (req.query.type) {
      filter.type = req.query.type
    }

    if (req.query.font) {
      filter.font = req.query.font
    }

    const letters = await Letters.find(filter).exec()

    res.json(letters)
  } catch (e) {
    res.status(500).json({ error: `There was an error: ${e}` })
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

    let letterError
    const letters = await Letters.findById(letterId)
      .exec()
      .catch(e => {
        console.log(e)
        letterError = handleMongooseErrors(e)
        return null
      })
    if(!letters) {
      res.status(404).json({
        message: "Something went wrong trying to find the letters",
        letterError
      })
      return;
    }

    res.json(letters)
  } catch (e) {
    res.status(500).json({ error: `There was an error: ${e}` })
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
 * Accepts the entire array of letters
 * Updates occur on the property in
 * the frontend
 */

exports.updateLetters = async (req, res) => {
  try {
    const { id } = req.params
    const { updateItems } = req.body
    console.log(id)
    if (!updateItems) {
      res.status(422).json({
        errorMessage: `Expected an updateItems property in the body and got ${updateItems} instead.`
      })
      return
    }
    let letterError
    const letter = await Letters.findByIdAndUpdate(
      { _id: id },
      { letters: updateItems },
      { returnDocument: "after" }
    )
      .exec()
      .catch(e => {
        console.log(e)
        letterError = handleMongooseErrors(e)
        return null
      })

    if (!letter) {
      return res.status(404).json({
        error: "Letter not found",
        letterError
      })
    }

    await letter.save().catch(e => {
      console.log(e)
      return res.status(400).json({
        message: "Something went wrong saving and updating the items.",
        ...handleMongooseErrors(e)
      })
    })
    res.status(200).json({
      message: "Updated successfully",
      letters: letter.toJSON()
    })
  } catch (e) {
    res.status(500).json({
      error: "Internal Server Error",
      errorMessage: e.message,
      errorStack: e.stack
    })
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
  } catch (e) {}
}

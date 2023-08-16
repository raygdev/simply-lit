/**
 * GET /letters
 *
 * responds with json array of all letters with type and size
 * will provide filters with queries to this route
 */

const { Letters } = require("../../models/Letters.js")

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

    //TODO: provide better error handling with catch
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
    //TODO: provide catch here for better error handling
    const letters = await Letters.findById(letterId).exec()
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
    //letter may be undefined in the body... a default is set
    const { size, type, font, letters } = req.body
    /**
     * more checks should be made to ensure that
     * size, type, and font are defined.
     */
    const newLetter = new Letters({ size, type, font, letters })
    //TODO: provide a catch for better error messages if saving fails
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
    const { updateItems } = req.body
    console.log(id)

    //update items should be defined in the body...
    //may need some more strict checks, but for now this will do.
    if (!updateItems) {
      res.status(422).json({
        errorMessage: `Expected an updateItems property in the body and got ${updateItems} instead.`
      })
      return
    }
    let letterError
    const letter = await Letters.findByIdAndUpdate(
      //find by id
      { _id: id },
      //letter will be updated with update items
      { letters: updateItems },
      /**
       * tells mongoose to return the updated document and
       * not the old one.
       */
      { returnDocument: "after" }
    )
      .exec()
      //run a catch for more specific error handling
      .catch(e => {
        console.log(e)
        letterError = {
          errorName: e.name,
          errorPath: e.path,
          errorMessage: e.message,
          errorReason: e.reason
        }
        /**
         * Coerce to null so that letter becomes falsy in the
         * event of some cast error from mongoose
         *
         * letter error will be assigned the value of the error and sent
         * with the appropriate status code.
         *
         * The error will typically be a cast error in the event that
         * the id cannot be cast to an object id (occurs behind the scenes) from mongoose.
         *
         * if an otherwise valid id is passed, letter will still be null,
         * but no error will occur and this catch will never get called.
         */
        return null
      })

    if (!letter) {
      return res.status(404).json({
        error: "Letter not found",
        /**
         * if letter error is defined, both errors will show
         * if it is not only the hard-coded error will display
         */
        letterError
      })
    }

    await letter.save().catch(e => {
      console.log(e)
      return res.status(400).json({
        message: "Something went wrong saving and updating the items.",
        errorName: e.name,
        errorMessage: e.message,
        errorPath: e.path,
        errorReason: e.reason
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

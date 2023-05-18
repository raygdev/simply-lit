const express = require("express")
const router = express.Router()
const lettersControllers = require("../../controllers/lettersControllers/lettersControllers")

router.get("/letters", lettersControllers.getAllLetters)
router.get("/letters/:id", lettersControllers.getLettersById)
router.put("/letters/:id", lettersControllers.updateLetters)
router.delete("/letters/:id", lettersControllers.deleteById)
router.post("/letters", lettersControllers.createLetters)

module.exports = router
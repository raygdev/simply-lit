const express = require("express")
const router = express.Router()
const lettersControllers = require("../../controllers/lettersControllers/lettersControllers")
const { isAuth } = require("../../middleware/auth")

router.get("/letters", isAuth, lettersControllers.getAllLetters)
router.get("/letters/:id", isAuth, lettersControllers.getLettersById)
router.put("/letters/:id", isAuth, lettersControllers.updateLetters)
router.delete("/letters/:id", isAuth, lettersControllers.deleteById)
router.post("/letters", isAuth, lettersControllers.createLetters)

module.exports = router
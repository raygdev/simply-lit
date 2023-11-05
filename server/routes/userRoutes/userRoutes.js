const express = require("express")
const router = express.Router()
const userControllers = require("../../controllers/userControllers/userControllers")

router.post("/user", userControllers.createUser)

module.exports = router
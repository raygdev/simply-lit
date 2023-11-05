const express = require("express")
const router = express.Router()
const userControllers = require("../../controllers/userControllers/userControllers")
const login = require("../../controllers/loginController")
const { isAuth } = require("../../middleware/auth")

router.post("/user", userControllers.createUser)
router.post("/login", login.loginController)

module.exports = router
const express = require("express")
const router = express.Router()
const userControllers = require("../../controllers/userControllers/userControllers")
const login = require("../../controllers/loginController/loginController")
const { isAuth } = require("../../middleware/auth")

router.post("/user", userControllers.createUser)
router.get("/user/:id", isAuth, userControllers.getUserById)
router.post("/login", login.loginController)

module.exports = router
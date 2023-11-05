const { User } = require("../../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.loginController = async (req, res) => {
    const { email, password } = req.body
    if(!email || !password) return res.status(409).json({
        success:false,
        message: "email and password fields required"
    })

    try{
        const found = await User.findOne({ email })
        const user = found.toJSON()
        if(!found) return res.status(404).json({
            success:false,
            message: "Could not find that user, please check your credentials"
        })

        const pass = await bcrypt.compare(password, user.password)

        if(pass) {
            delete user.password
            res.cookie("token", jwt.sign(user, process.env.JWT_SECRET), {
                secure: false,
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 8
            }). status(200).json({
                success: true,
                message: "User successfully logged in",
                user
            })
        } else {
            res.status(404).json({
                success:false,
                message: "Could not find that user, please check your credentials"
            })
        }
    }
    catch(e) {
        console.log(e)
        res.status(400).json({
            success:false,
            message: "Something went wrong"
        })
    }
}

exports.logoutController = async (req, res) => {
    res.clearCookie("token")
        .status(302)
        .redirect("http://localhost:5173/login")
}
const jwt = require("jsonwebtoken")
const { User } = require("../models/User")

async function isAuth(req,res,next) {
    const token = req.cookies?.token
    if(!token) return res.status(401).json({
        success:false,
        message: "Not authorized, please log in",
    })

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded)
        req.user = user
        next()

    }
    catch(e) {
        console.log(e)
        res.status(401).json({
            success:false,
            message: "Something went wrong"
        })
    }


}

module.exports = { isAuth }
const { User } = require('../../models/User')
const bcrypt = require("bcrypt")

exports.createUser = async (req, res, next) => {
    const { email, password, role } = req.body

    if(!email || !password || !role) return res.status(409).json({
        success: false,
        message: "Email, password, and role are required fields"
    })
    
    try {
        const newUser = {
            email,
            role,
            password: await bcrypt.hash(password, 10)
        }
        const user = new User(newUser)
        await user.save()
        console.log("new user created", user.toJSON())
        console.log(user.id)
        res.status(200).json(user.toJSON())
    }
    catch(e) {
        console.log(e)
        res.status(400).json({
            success: false,
            message: "Could not create a new user",
            reason: e.reason,
            error: e
        })
    }
}
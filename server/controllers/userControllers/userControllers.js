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

exports.getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const found =  await User.findById(id).select("-password").exec()
        if(!found) return res.status(404).json({
            success: false,
            message: "Could not find that user"
        })

        res.status(200). json(found.toJSON())
        
    }
    catch(e) {
        console.log(e)
        res.status(400).json({
        success: false,
        message: "Something went wrong",
        error: e
        })
    }
}
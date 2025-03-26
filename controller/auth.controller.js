const { StatusCodes } = require("http-status-codes")
const UserModel = require('../model/user')
const bcrypt = require('bcryptjs')

// register
const  regController = async (req,res) => {
    try {
        let { name,email, mobile,password } = req.body 

        // validate 
        let extUser = await UserModel.findOne({email})
            if(extUser)
                return res.status(StatusCodes.CONFLICT).json({ msg: `user ${email} already registered` })

        // encrypt (hash) the password
        let hashPass = await bcrypt.hash(password,10)
        
        // save the data into db
        let newUser = await UserModel.create({
            name,
            email,
            mobile,
            password: hashPass
        })

        res.status(StatusCodes.ACCEPTED).json({ msg: "user registered successfully", user: newUser })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
// login
const  loginController = async (req,res) => {
    try {
        res.json({ msg: "login"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
// logout
const  logoutController = async (req,res) => {
    try {
        res.json({ msg: "logout"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
// verify
const  verifyController = async (req,res) => {
    try {
        res.json({ msg: "verify"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
// forgot password
const  forgotPassController = async (req,res) => {
    try {
        res.json({ msg: "forgot password"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}
// update password
const  updatePassController = async (req,res) => {
    try {
        res.json({ msg: "update password"})
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}


module.exports = { regController, loginController, logoutController, verifyController, forgotPassController, updatePassController }
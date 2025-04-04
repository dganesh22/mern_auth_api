const jwt = require('jsonwebtoken')

const generateToken = async (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY,{
        expiresIn: "1d"
    })
}

module.exports = generateToken
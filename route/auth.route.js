const authRoute = require('express').Router()
const { regController, loginController, logoutController, verifyController, forgotPassController, updatePassController } = require('../controller/auth.controller')

// register
authRoute.post(`/register`, regController)

// login
authRoute.post(`/login`, loginController)

// logout
authRoute.get(`/logout`, logoutController)

// verify user token
authRoute.get(`/verify`, verifyController)

// generate otp token
authRoute.post(`/forgot/password`, forgotPassController)

// to update password
authRoute.patch(`/update/password`, updatePassController)

module.exports = authRoute
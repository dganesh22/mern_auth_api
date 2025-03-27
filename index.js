const express = require('express')
const { StatusCodes } = require('http-status-codes')
require('dotenv').config()
const connectDb = require('./db/db-connect')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT

const cors = require('cors')

const app = express()


app.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, PATCH, DELETE"
}))

app.use(cookieParser(process.env.SECRET_KEY))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// index route
app.get(`/`, async (req,res) => {
    return res.status(StatusCodes.ACCEPTED).json({ msg: "welcome to auth api"})
})

// api route
app.use(`/api/auth`, require('./route/auth.route'))

// default
app.all(`/*`, async (req,res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "requested path not found"})
})

app.listen(PORT,function() {
    connectDb()
    console.log(`server is running @ http://localhost:${PORT}`)
})
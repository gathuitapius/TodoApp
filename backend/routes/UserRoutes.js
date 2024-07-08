const express = require("express")
const { Register, Login } = require("../Controllers/UserController")

const UserRouter = express.Router()

UserRouter.post('/register', Register)
UserRouter.get('/login', Login)

module.exports = UserRouter
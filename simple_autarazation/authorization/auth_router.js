const express = require("express")
const Authorization = require('./authorization_controller')
const router = express()

router.post("/signIn", Authorization.create)
router.post("/logIn", Authorization.Enter)

module.exports = router
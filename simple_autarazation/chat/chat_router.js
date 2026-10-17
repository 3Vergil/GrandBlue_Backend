const express = require("express")
const chat_controller = require("./chat_controller")
const router = express()
const MiddleWare = require("../midleware")
router.post('/postMessage', MiddleWare.AuteficationForChat,chat_controller.saveMessage)
router.get('/getAllMessage/:id', chat_controller.getAllMessage)

module.exports = router
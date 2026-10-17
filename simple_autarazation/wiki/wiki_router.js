const express = require('express')
const router = express()
const Wiki = require('./wiki_controller')
const MiddleWare = require("../midleware")

router.post("/addfavoriteCharacters", MiddleWare.Autefication, Wiki.AddFavorite)
router.get('/getCharacters',Wiki.getCharacters)

module.exports = router
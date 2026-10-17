const express = require('express')
const musicController = require('./music_controller')

const router = express()

router.get('/getMusic', musicController.getMusics)

module.exports = router
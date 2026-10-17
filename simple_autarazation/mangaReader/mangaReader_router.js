const express = require('express')
const mangaReaderController = require('./mangaReader_controller')
const MiddleWare = require("../midleware")
const router = express()


router.get("/GetChapter", mangaReaderController.GetMangaVolumes)
router.get('/chapter/getChapter/:id',mangaReaderController.GetMangaChapter)
router.put('/chapter/currentReading', MiddleWare.Autefication , mangaReaderController.CurrentReadingChapter)

module.exports = router
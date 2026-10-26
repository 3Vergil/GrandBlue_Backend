const express = require("express")
const app = express()
const cors = require('cors');
const AuthRouter = require('./authorization/auth_router.js')
const MangaRouter = require('./mangaReader/mangaReader_router.js')
const MusicRouter = require('./music/music_router.js')
const ProfileRouter = require('./profile/profile_router.js')
const WikiRouter = require('./wiki/wiki_router.js')
const ChatRouter = require('./chat/chat_router.js')
const Cookies = require("cookie-parser")
require("dotenv").config()
PORT = 2014
app.use(express.json())
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true
}))
// connection to folders
app.use('/avatars', express.static('avatars'))
app.use('/chapters', express.static('chapters'))
app.use('/volumes', express.static('volumes'))
app.use(Cookies())
// router
app.use('/auth', AuthRouter)
app.use('/manga', MangaRouter)
app.use('/music', MusicRouter)
app.use('/profile', ProfileRouter)
app.use('/wiki', WikiRouter)
app.use('/chat', ChatRouter)

async function Server() {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (err) {
        .error("ОШИБКА ПОДКЛЮЧЕНИЯ:");
        console.error(err.message);
    }
}

Server()
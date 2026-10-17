const database = require("../db.js")

class musicRepository{
    async getAllMusics(){
        const Musics = await database.query('SELECT * FROM music')
        return Musics
    }
}

module.exports = new musicRepository
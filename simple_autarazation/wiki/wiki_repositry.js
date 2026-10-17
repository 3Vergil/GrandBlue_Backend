const database = require("../db.js")



class wikiRepositry{
    async geWikiData(){
        const Character = await database.query('SELECT * FROM character')
        return Character.rows
    }

    async addFavoriteCharacter(userId, charId){
        const FavoriteCharacters = await database.query(`INSERT INTO user_favorite (user_id , character_id) values ($1, $2)`,[userId, charId])
        return FavoriteCharacters.rows[0]
    }
}
module.exports = new wikiRepositry
const database = require("../db.js")

class profileRepository{
    async getUserData(userId){
        const [Account, Characters] = await Promise.all([database.query(`SELECT * FROM users WHERE id = $1`, [userId]),
        database.query(`SELECT * FROM user_favorite WHERE user_id = $1`, [userId])]) 
        return {AccountInfo: Account.rows[0], Characters: Characters.rows }
    }
    async getChapterData(ChapterId){
        const Volume = await database.query('SELECT image_url FROM manga_volumes WHERE $1 IN (SELECT jsonb_array_elements_text(chapters))', [ChapterId])
        return Volume.rows[0]
    }
    async updateName(newName, userId){
        const NewAccountName = await database.query(`UPDATE users set nickname = $1 WHERE id = $2 RETURNING *`, [newName , userId])
        return NewAccountName.rows[0]
    }
    async uploadAvatar(avatarInclude ,userId, avatar){
        let AccountAvatar
        if(avatarInclude === false){
            AccountAvatar = await database.query(`SELECT avatar FROM users WHERE id = $1`, [userId])
            return AccountAvatar.rows[0]
        }
        else{
            AccountAvatar = await database.query(`UPDATE users set avatar = $1 WHERE id = $2 RETURNING *`, [avatar,userId])
            return AccountAvatar.rows[0]
        }
    }
    async Quit(userId){
        return await database.query(`SELECT * FROM users WHERE id = $1`, [userId])
    }
    async removeFavCharacter(userId, charId){
        return await database.query(`DELETE FROM user_favorite WHERE user_id = $1 AND character_id = $2`, [userId, charId])
    }
}

module.exports = new profileRepository
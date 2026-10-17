const database = require("../db.js")



class chatRepository{
    async saveMessage(userId, message, chapterId){
        try{
            const saveMessageInDB = await database.query(`INSERT INTO chat_messages (user_id, message,chapter_id) VALUES ($1, $2, $3)`, [userId, message, chapterId])
            return true
        }
        catch(err){
            throw new Error(err)
        }

    }
    async getAllMessage(chapterId){
        try{
            const getAllMessageFromDB = await database.query(`
                SELECT chat_messages.message, 
                COALESCE(users.nickname, 'Anonim') AS nickname, 
                chat_messages.created_at
                FROM chat_messages
                LEFT JOIN users ON users.id = chat_messages.user_id
                WHERE chapter_id = $1
                ORDER BY created_at;`, [chapterId])
            return getAllMessageFromDB.rows
        }
        catch(err){
             throw new Error(err)
        }
    }
}

module.exports = new chatRepository;
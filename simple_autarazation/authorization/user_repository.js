const database = require("../db.js")


class UserReprisitory{
    async findUserByName(name){
        const result = await database.query(`SELECT * FROM users WHERE nickname = $1`, [name])
        return result.rows[0]
    }

    async createNewUser(name, hashedPassword){
        const result = await database.query(`INSERT INTO users (nickname, password) VALUES ($1, $2) RETURNING *`, 
        [name, hashedPassword])
        return result.rows[0]
    }
}

module.exports = new UserReprisitory;
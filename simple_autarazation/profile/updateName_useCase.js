const profile_repository = require("./profile_repository")
require("dotenv").config()
const JWT = require("jsonwebtoken")

class updateNameUseCase{
    async execute(newName, userId){
        const newAccountName = await profile_repository.updateName(newName,userId)
        const accessToken = JWT.sign({id: newAccountName.id ,name: newAccountName.nickname}, process.env.ACCESS_SECRET_TOKEN)
        return{accessToken: accessToken, newName: newAccountName.nickname}
    }
}

module.exports = new updateNameUseCase
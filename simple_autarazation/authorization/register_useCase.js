const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
require("dotenv").config()
const userRepository = require("./user_repository")


class registerUseCase{

    async execute(name, password){
        const hashedpassword = await bcrypt.hash(password, 10)
        const newUser = userRepository.createNewUser(name , hashedpassword)
        const accessToken = JWT.sign({id: newUser.id ,name: newUser.nickname}, process.env.ACCESS_SECRET_TOKEN)
        return {accessToken: accessToken}
    }
}

module.exports = new registerUseCase
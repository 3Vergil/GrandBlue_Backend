const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
require("dotenv").config()
const userRepository = require("./user_repository")



class loginUserCase{
    async execute(name , password){
            const User = await userRepository.findUserByName(name)
            const IsMatch = await bcrypt.compare(password, User.password)
            if(!IsMatch){
                throw new Error("Wrong name or password")
            }
            else{
                const accessToken = JWT.sign({id: User.id ,name: User.nickname}, process.env.ACCESS_SECRET_TOKEN)
                return {accessToken: accessToken}
            }
    }
}

module.exports = new loginUserCase
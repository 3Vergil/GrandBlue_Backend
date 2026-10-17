const profile_repository = require("./profile_repository")



class quitUseCase{
    async execute(userId, res){
        await profile_repository.Quit(userId)
        return res.clearCookie("token",{path: "/"})
    }
}

module.exports = new quitUseCase
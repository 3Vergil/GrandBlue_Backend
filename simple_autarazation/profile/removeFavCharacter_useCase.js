const profile_repository = require("./profile_repository");



class removeFavCharacterUseCase{
    async execute(userId, charId){
        return await profile_repository.removeFavCharacter(userId, charId)
    }
}

module.exports = new removeFavCharacterUseCase
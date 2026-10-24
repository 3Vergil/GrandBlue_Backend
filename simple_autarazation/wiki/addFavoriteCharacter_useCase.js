const wiki_repositry = require("./wiki_repositry")


class addFavoriteCharacterUseCase{
    async execute(userId, CharId){
        const character = await wiki_repositry.getCharacter(userId, CharId)
        if(character){
            throw new Error('Character already added')
        }
        await wiki_repositry.addFavoriteCharacter(userId, CharId)
        return true
    }
}

module.exports = new addFavoriteCharacterUseCase
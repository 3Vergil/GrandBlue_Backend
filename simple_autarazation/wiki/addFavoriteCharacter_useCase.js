const wiki_repositry = require("./wiki_repositry")


class addFavoriteCharacterUseCase{
    async execute(userId, CharId){
        const character = await wiki_repositry.geWikiData(userId, CharId)
        if(!character){
            throw new Error('Character already added')
        }
        return true
    }
}

module.exports = new addFavoriteCharacterUseCase
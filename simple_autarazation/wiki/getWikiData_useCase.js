const wiki_repositry = require("./wiki_repositry")



class getWikiDataUseCase{
    async execute(){
        return await wiki_repositry.geWikiData()
    }
}

module.exports = new getWikiDataUseCase
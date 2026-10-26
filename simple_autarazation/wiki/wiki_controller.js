const addFavoriteCharacter_useCase = require("./addFavoriteCharacter_useCase.js")
const getWikiData_useCase = require("./getWikiData_useCase.js")

class wikiController {
    async AddFavorite(req, res){
        try{
            const character = await addFavoriteCharacter_useCase.execute(req.userinfo.id,req.body.id)      
            return res.status(200).json({message:'Succes'})
        }
        catch(err){
            return res.status(401).json({message: err.message})
        }
    }
    async getCharacters(req, res){
        try{
            const Character = await getWikiData_useCase.execute()
            return res.status(200).json(Character)
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = new wikiController
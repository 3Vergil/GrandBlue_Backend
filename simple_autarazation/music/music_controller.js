const getMusicUseCase = require("./getMusic_useCase.js");


class music_controller {
    async getMusics(req, res){
        try{
            const Musics = await getMusicUseCase.execute()
            return res.status(200).json(Musics)
        }   
        catch(err){
            return res.status(500)
        }
    }
}

module.exports = new music_controller ;
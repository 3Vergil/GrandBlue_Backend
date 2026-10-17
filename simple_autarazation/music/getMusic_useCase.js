const musicRepository = require("./music_repository");


class getMusicUseCase{
    async execute(){
        const Musics = await musicRepository.getAllMusics()
        return Musics.rows
    }
}

module.exports = new getMusicUseCase;
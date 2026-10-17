const chat_repository = require("./chat_repository");



class getAllMessageUseCase{
    async execute(chapterId){
        const getAllMessageFromServer = await chat_repository.getAllMessage(chapterId)
        return getAllMessageFromServer
    }
}

module.exports = new getAllMessageUseCase;
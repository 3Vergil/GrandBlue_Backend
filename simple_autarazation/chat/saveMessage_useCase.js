const chat_repository = require("./chat_repository");


class saveMessageUseCase{
    async execute(userId, message, chapterId){
        const sendMessageToServer = await chat_repository.saveMessage(userId, message, chapterId)
        return true
    }
}

module.exports = new saveMessageUseCase;
const mangaRepository = require("./manga_repository");

class currentReadingChapterUseCase {
    async execute(chId, page, userId){
        const Success = await mangaRepository.updateUserCurrentChapter(chId, page, userId)
        if(Success){
            return true
        }
        else{
            throw new Error('you didnt loged In')
        }
    }
}

module.exports = new currentReadingChapterUseCase;
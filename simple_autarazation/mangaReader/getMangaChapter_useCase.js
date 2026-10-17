const mangaRepository = require("./manga_repository");


class getMangaChapterUseCase {
    async execute(id){
        const chapterPath = await mangaRepository.findCurrentChapter(id)
        if (chapterPath && chapterPath.rows && chapterPath.rows.length > 0) {
            return chapterPath.rows[0]
        } 
        else {
            return new Error("Chapter not found")
        }
    }
}

module.exports = new getMangaChapterUseCase;
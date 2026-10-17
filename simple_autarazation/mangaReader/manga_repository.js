const database = require("../db.js")

class mangaRepository{
    async getMangaVolumesData(){
        const Volumes = await database.query('SELECT volume_number FROM manga_volumes')
        const chapters = await database.query('SELECT chapters FROM manga_volumes')
        const ImagePath = await database.query('SELECT image_url FROM manga_volumes')
        return{
            Volumes: Volumes.rows,
            Chapters: chapters.rows,
            ImagePath: ImagePath.rows
        }
    }
    async findCurrentChapter(id){
        const chapterPath = await database.query('SELECT path FROM chapters WHERE id = $1', [id])
        return chapterPath
    }

    async updateUserCurrentChapter(chId, page, userId){
        const CurrentChapterId = await database.query('UPDATE users set reading_chapter_id = $1, PageNumber = $2 WHERE id = $3 RETURNING *', [chId, page, userId]) 
        return CurrentChapterId.rows[0].nickname
    }
}

module.exports = new mangaRepository;
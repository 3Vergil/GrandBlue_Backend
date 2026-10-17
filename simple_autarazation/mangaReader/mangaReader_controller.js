const currentReadingChapterUseCase = require("./currentReadingChapter_useCase.js")
const getMangaChapterUseCase = require("./getMangaChapter_useCase.js")
const mangaRepository = require("./manga_repository.js")

class mangaReader {
     async GetMangaVolumes(req, res){
        try{
            const {Volumes, Chapters, ImagePath} = await mangaRepository.getMangaVolumesData()
            res.json({
            Volumes: Volumes,
            Chapters: Chapters,
            ImagePath: ImagePath})
        }
        catch(err){
            console.log(err)
        }
    }
    async GetMangaChapter(req, res){
        try{
            const {id} = req.params
            const chapterPath = await getMangaChapterUseCase.execute(id)  
            return res.status(200).json(chapterPath);
        }
        catch(err){
            return res.status(404).json({error: err})
        }
    }
    async CurrentReadingChapter(req, res){
        try{
            const ChapterId = req.body.ChId
            const Page = req.body.Page
            const userId = req.userinfo.id
            await currentReadingChapterUseCase.execute(ChapterId , Page , userId)
            return res.status(200).json({message: 'succes'})
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = new mangaReader
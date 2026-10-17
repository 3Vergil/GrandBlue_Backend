const getAllMessage_useCase = require("./getAllMessage_useCase");
const saveMessageUseCase = require("./saveMessage_useCase");


class chatController{
    async saveMessage(req, res){
        try{
            const {userId, message, chapterId} = req.body
            const sendMessage = await saveMessageUseCase.execute(userId, message, chapterId)
            res.status(200).json({message: 'succes'})
        }
        catch(err){
            console.log(err)
            res.status(500).json(err)
        }
    }
    async getAllMessage(req,res){
        const {id} = req.params
        const allMessage = await getAllMessage_useCase.execute(id)
        res.status(200).json(allMessage)
    }
}

module.exports = new chatController;
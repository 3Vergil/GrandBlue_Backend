const getUserDataUseCase = require("./getUserData_useCase")
const updateName_useCase = require("./updateName_useCase")
const Quit_useCase = require("./Quit_useCase")
const removeFavCharacter_useCase = require("./removeFavCharacter_useCase")
const uploadAvatarUseCase = require("./uploadAvatar_useCase")
const getAllComments_useCase = require("./getAllComments_useCase")

class profileController {
    async getUserInfo(req, res){
        try{
           const { Account, Volume, FavoriteCharacters, ChapterId } = await getUserDataUseCase.execute(req.userinfo.id)
            return res.status(200).json(
                {
                    id: Account.id,
                    name: Account.nickname, 
                    avatar_path: Account.avatar, 
                    favorite_characters: FavoriteCharacters, 
                    Volume: Volume.image_url,
                    chapterId: ChapterId,
                    Page: Account.pagenumber})
        }
        catch(err){
            res.status(500).json(err)
        }
   }
   async updateName(req,res){
    try{
        const Account = req.body
        if(!Account.NewName){
            res.status(400).json("Новое имя не указано")
        }
        const {accessToken, newName} = await updateName_useCase.execute(Account.NewName, req.userinfo.id)
        res.cookie("token", accessToken, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    maxAge: 60000 * 60,
                    path: "/"
                })
        return res.status(200).json(newName)
    }
    catch(err){
        res.status(500).json(err)
    }
   }
   /*async deleteAcc(req,res){
        const Account = await database.query(`DELETE FROM users WHERE id = $1`, [req.userinfo.id])
        const AccountCharacter = await database.query( `DELETE FROM user_favorite WHERE user_id = $1`, [req.userinfo.id])
        res.clearCookie("token",{path: "/"})
        return res.status(200).json(Account, AccountCharacter)
   }*/
   async UploadAvatar(req,res){
    try{
        if (!req.file) {
            return res.status(400).json({ error: "Файл не получен" });
        }
        const AccountAvatar = await uploadAvatarUseCase.execute(req.userinfo.id, req.file.path)
        return res.status(200).json({avatar_path: AccountAvatar.avatar_path})
    }
    catch(err){
        res.status(500).json({message: err})
    }
   }
   async Quit(req, res){
        await Quit_useCase.execute(req.userinfo.id, res)
        return res.status(200).json("Succesfull Log Out")
   }
    async RemoveFavoriteCharacters(req, res){
        try{
            await removeFavCharacter_useCase.execute(req.userinfo.id, req.body.id)
            return res.status(200).json({ success: true, message: "Character removed" });
        }
        catch(err){
            return res.status(500).json({ error: "Failed to delete" })
        }
    }
    async getComments(req, res){
        try{
            const userId = req.userinfo.id
            const AccountComments = await getAllComments_useCase.execute(userId)
            return res.status(200).json(AccountComments)
        }
        catch(err){
            return res.status(500)
        }
    }
}

module.exports = new profileController
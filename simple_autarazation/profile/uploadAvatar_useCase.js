const profile_repository = require("./profile_repository")
const fs = require("fs")

class uploadAvatarUseCase{
    async execute(userId, avatar){
        let AccountAvatar = await profile_repository.uploadAvatar(false, userId)
        if(AccountAvatar.avatar){
        await fs.unlink(AccountAvatar.avatar, (err)=>{
            try{
            }
            catch(err){
                console.log(err)
            }
        })}
        AccountAvatar = await profile_repository.uploadAvatar(true, userId, avatar)
        console.log(AccountAvatar)
        return AccountAvatar
    }
}

module.exports = new uploadAvatarUseCase
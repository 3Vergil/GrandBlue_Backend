const profile_repository = require("./profile_repository");



class getAllCommentsUseCase{
    async execute(userId){
        const AccountComments = await profile_repository.getComments(userId)
        return AccountComments
    }
}

module.exports = new getAllCommentsUseCase;
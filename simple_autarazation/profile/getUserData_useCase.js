const profileRepository = require("./profile_repository");



class getUserDataUseCase{
    async execute(userId){
        const data = await profileRepository.getUserData(userId)
        if (!data.AccountInfo) {
            return new Error("User not found");
        }
        const AccountData = data.AccountInfo
        const ChapterId = AccountData.reading_chapter_id
        const VolumeData = ChapterId ? await profileRepository.getChapterData(ChapterId) : null;
        const FavoriteCharacters = data.Characters.map((element) => {return element.character_id})
        return {
            Account: AccountData,
            Volume: VolumeData,
            FavoriteCharacters,
            ChapterId
        };
    }
}

module.exports = new getUserDataUseCase;
const express = require("express")
const Profile = require("./profile_controller")
const MiddleWare = require("../midleware")
const router = express()


router.post("/avatar",MiddleWare.Autefication, MiddleWare.upload.single("avatar"), Profile.UploadAvatar)
router.post("/logout" ,MiddleWare.Autefication, Profile.Quit)

router.get("/getOne",MiddleWare.Autefication, Profile.getUserInfo)
router.get('/getComments', MiddleWare.Autefication, Profile.getComments)

router.patch("/updateName",MiddleWare.Autefication, Profile.updateName)
router.patch("/RemoveCharacters", MiddleWare.Autefication, Profile.RemoveFavoriteCharacters)

module.exports = router
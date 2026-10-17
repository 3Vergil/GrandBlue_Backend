const JWT = require("jsonwebtoken");
require("dotenv").config()
const multer = require("multer");


const AvatarStorage = multer.diskStorage({
    destination: (req, file , next) =>{
        next(null, "./avatars")
    },
    filename: (req, file, next) => {
        next(null, req.userinfo.id + '-' + file.originalname)
    }
})

const upload = multer({storage:AvatarStorage})
function Autefication(req, res, next){
    const newToken = req.cookies.token
    if(!newToken) return res.sendStatus(401);

    JWT.verify(newToken, process.env.ACCESS_SECRET_TOKEN, (error, decodeData) =>{
        if(error) return res.sendStatus(401);
        req.userinfo = decodeData
        next()
    })
}

function AuteficationForChat(req, res , next){
    const newToken = req.cookies.token
    if(!newToken){
       req.userinfo.id = null
       next() 
    } ;
    JWT.verify(newToken, process.env.ACCESS_SECRET_TOKEN, (error, decodeData) =>{
        if(error) return res.sendStatus(401);
        req.userinfo = decodeData
        next()
    })
}
module.exports = {
    upload,
    Autefication,
    AuteficationForChat
};
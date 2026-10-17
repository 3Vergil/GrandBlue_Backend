const loginUserCase = require("./login_useCase.js")
const registerUseCase = require("./register_useCase.js")

class authorizationController{
     async create(req, res){
        try{
                const {name, password} = req.body
                const accessToken = await registerUseCase.execute(name, password)

                res.cookie("token", accessToken, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    maxAge: 60000 * 60,
                    path: "/"
                })
                return res.status(200).json({ success: true, message: "User created" });
            }
            catch(err){
                if (err.code === '23505') { 
                    return res.status(400).json({ message: "That nickname is already in use." });
                }
                res.status(400).json(err.message)
            }
   }
   async Enter(req, res){
    try{
        const {name, password} = req.body   
        const {accessToken} = await loginUserCase.execute(name, password)

        res.cookie("token", accessToken, {
                        httpOnly: true,
                        secure: false,
                        sameSite: "lax",
                        maxAge: 60000 * 60,
                        path: "/"
                    })
        return res.status(200).json({ success: true, message: "Success" });
    }
    catch(err){
        res.status(400).json(err.message)
    }
   }
}

module.exports = new authorizationController;
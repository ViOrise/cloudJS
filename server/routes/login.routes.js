const Router = require("express")
const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const config = require("config")
router = new Router()

router.post("/login",
    [
        check("email", "email is incorrect").isEmail(),
        check("password", "pasword is incorrect").isLength({min:4})
    ],

async (req, res)=>{
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({message: "Uncorrect request", errors})
        }
        const {email, password} = req.body

        const user = await User.findOne({email})
        if (!user){
            res.status(400).json({message: "Can't find this mail :", email})
        }

        const comparePass =  bcrypt.compareSync(password, user.password)
        if (!comparePass){
            res.status(400).json({message: "uncorrect password"})
        }
        const token = jwt.sign({id: user.id}, config.get("token-key"), {expiresIn: "1h"})
        return res.json({
            token,
            user : {
                id: user.id,
                email: email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar
            }
            
        }
        )
    }catch(err){
        console.log("error in registration", err)
        res.json({message: "error in auth  "})
    }
})

module.exports = router
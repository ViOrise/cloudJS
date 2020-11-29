const Router = require("express")
const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator")


router = new Router()

router.post("/registration",
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

        const hasEmail = await User.findOne({email})
        if (hasEmail){
            res.status(400).json({message: "This email is already exist :", email})
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = new User({email, password:hashPassword})
        await user.save()
        res.json({message: "user was created"})
    }catch(err){
        console.log("error in registration", err)
        res.json({message: "error in registration "})
    }
})

module.exports = router
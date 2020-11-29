const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const loginRouter = require("./routes/login.routes")

const app = express()

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/auth", loginRouter)

const PORT = config.get("PORT")

const start = async () =>{
    try{

        await mongoose.connect(config.get("DBurl"), 
                        {useNewUrlParser: true,
                        useUnifiedTopology: true} )
        app.listen(PORT, ()=>{
            console.log(`server has started on port ${PORT}`)
            
        })

        app.get("/", (req, res) => {
            return res.json({message: "this is my root page"})
        })
    }catch(err){
        console.log(err)
    }
}

start()
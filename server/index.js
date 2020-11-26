const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()

const PORT = config.get("PORT")

const start = () =>{
    try{

        app.listen(PORT, ()=>{
            console.log(`server has started on port ${PORT}`)
        })
    }catch(err){
        console.log(err)
    }
}

start()
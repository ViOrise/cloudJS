import React from "react" 
import "./Registration.sass"
import {Input} from "../../utils/input/Input.js"
import {useState} from "react"
import {regRequest} from "./../../actions/user.js"


export const Registration = () =>{

    const [mail, setMail] = useState("")    
    const [password, setPassword] = useState("")


    return(
        <div className="registration">
            <h1>Registration</h1>
            <div className="inputs">
                <Input placeholder={"email"} setValue={setMail} value={mail}/>
                <Input placeholder={"password"} setValue={setPassword} value={password}/>
                 <button onClick={()=>{regRequest(mail,password)}}>Send</button>
            </div>
        </div>
    )
}
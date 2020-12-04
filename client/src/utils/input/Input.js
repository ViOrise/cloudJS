import React from "react"
import "./Input.sass"

export const Input = (props) =>{
    return(
        <>
            <input className="cInput"
            value={props.value}
            onChange = {(evnt)=>{props.setValue(evnt.target.value)}} 
            type="text" placeholder={props.placeholder} />
        </>
    )
}
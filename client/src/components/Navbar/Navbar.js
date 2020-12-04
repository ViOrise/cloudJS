import React from "react"
import "./Navbar.sass"
import {NavLink} from "react-router-dom"

export const Navbar = () => {
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <div className="menu">
                    <div className="reg">
                        <NavLink to="registration">Registration</NavLink></div>
                    <div className="auth">
                        <NavLink to="authorisation">Authorisation</NavLink>
                        </div>
                </div>
            </div>
        </>
    )
}

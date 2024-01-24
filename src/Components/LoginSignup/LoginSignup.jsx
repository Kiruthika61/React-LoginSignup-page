import React, { useState } from "react"
import './LoginSignup.css'
import user_icon from '../Asserts/person.png'
import email_icon from '../Asserts/email.png'
import password_icon from '../Asserts/password.png'
const LoginSignup=()=>{


const[action,setAction]=useState("Login")
    return(
        <div className="Container">
            <div className="Header">
                <div className="text">{action}</div>
                <div className="underline"></div>
                </div>
                <div className="inputs">
                     {action==="Login"?<div></div>:<div className="input"> <img src={user_icon}   alt="" />
                        <input  type="Username"  placeholder="Username"/>
                        </div>}
                      
                    <div className="input">
                        <img src={email_icon}   alt="" />
                        <input type="email"  placeholder="Email"/>
                    </div>
                    <div className="input">
                    <img src={password_icon} alt="" />
                        <input  type="password" placeholder="Password" />
                    </div>
                
                </div>
                {action==="Sign Up"? <div></div>:<div className="forgetpassword">Forget Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}  >Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
                
               
        </div>
    )
}

export default LoginSignup
import React from "react";
import './Login.css'
import { Link } from 'react-router-dom'

function Login()
{
    return(
        <div className="Login">
            <div className="facebook">
                <div className="pentagontext">
                    Pentagon Space
                </div>
                <div className="title">
                    Mastering The Future <br />
                    Training and Placement Institute
                </div>
            </div>
            <div className="LoginContainer">
                <div className="Logindetails">
                    <input type="email" placeholder="Email address or phone number" name='email' />
                    <br />
                    <input type="password" placeholder="Password" name='password' maxLength={"10"} />
                    <br />
                    <Link to = '/home' className="btn"><strong>Login</strong></Link>
                </div>
                <div className="forget">
                    <a href="forget">Forgotten Password ?</a>
                    <br />
                    <Link to="/signup" className="btns" style={{color : "white"}}>
                        Create New Account
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Login;
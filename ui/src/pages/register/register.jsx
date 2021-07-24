import React from 'react';
import "./register.css"

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you :)
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="username" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <input placeholder="Password again" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login to your account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
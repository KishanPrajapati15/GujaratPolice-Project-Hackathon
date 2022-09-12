import React from "react"
import "./index/index.css"

return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        <div className="button" onClick={() => history.push("/register")}>Register</div>
    </div>
)

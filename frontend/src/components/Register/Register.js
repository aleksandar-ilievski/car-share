import React from 'react'
import "./register.css"

function Register() {
    return (
        <div>
            <div class="content">
            <div class="form1 register">
                <h2>Register</h2>
                <label>
                <span>Name</span>
                <input type="text" />
                </label><br/>
                <label>
                <span>Email</span>
                <input type="email" />
                </label><br/>
                <label>
                <span>Password</span>
                <input type="password" />
                </label><br/>
                <label>
                <span>Confirm Password</span>
                <input type="password" />
                </label><br/><br/>
                <button type="button" class="submit">Sign Up</button>
            </div>
            </div>
        </div>
    )
}

export default Register

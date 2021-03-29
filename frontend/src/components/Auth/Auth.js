import React from 'react'
import { Link } from 'react-router-dom'
import "./auth.css"

export default function Auth() {

    return (
        <div>
            <div class="cont">
            <div class="form">
                <h2>Welcome back</h2>
                <label>
                <span>Email</span>
                <input type="email" />
                </label><br/>
                <label>
                <span>Password</span>
                <input type="password" />
                </label><br/><br/>
                <button type="button" class="submit">Sign In</button>
            </div>
            <div class="sub-cont">
                <div class="img">
                <div class="img__text">
                    <h2>New here?</h2>
                    <p>Sign up and discover great amount of new opportunities!</p>
                </div>
                <div class="img__btn">
                    <Link to="/register">
                    <button type="button" class="signup" >Sign Up</button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

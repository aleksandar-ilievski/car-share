import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { signin } from '../../actions/auth'
import "./auth.css"

const initialState = { name: '', email: '', password: '', confirmPassword: '' };

export default function Auth() {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signin(form, history));
    }

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div className="bgimg">
            <div className="cont">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Welcome back</h2>
                <label>
                <span>Email</span>
                <input className="inptGroup" name="email" type="email" onChange={handleChange}/>
                </label><br/>
                <label>
                <span>Password</span>
                <input className="inptGroup" name="password" type="password" onChange={handleChange}/>
                </label><br/><br/>
                <button type="submit" className="submit">Sign In</button>
            </form>
            <div className="sub-cont">
                <div className="img">
                <div className="img__text">
                    <h2>New here?</h2>
                    <p>Sign up and discover best vehicle for you!</p>
                </div>
                <div className="img__btn">
                    <Link to="/register">
                    <button type="button" className="signup" >Sign Up</button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

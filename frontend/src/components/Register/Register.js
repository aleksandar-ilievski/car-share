import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../actions/auth'
import "./register.css"

const initialState = { name: '', email: '', password: '', confirmPassword: '' };

function Register() {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signup(form, history));
    }

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    }
    
 

    return (
        <div className="bgimg">
            <div className="content">
            <form id="form1" className="form1 register" onSubmit={handleSubmit}>
                <h2 className="heading2">Register</h2>
                <label>
                <span>Name</span>
                <input id="name" className="inptGroup" type="text" name="name" onChange={handleChange} />
                </label><br/>
                <label>
                <span>Email</span>
                <input required id="email" className="inptGroup" type="email" name="email" onChange={handleChange} />
                </label><br/>
                <label>
                <span>Password</span>
                <input id="password" className="inptGroup" type="password" name="password" onChange={handleChange} required />
                </label><br/>
                <label>
                <span>Confirm Password</span>
                <input className="inptGroup" type="password" name="confirmPassword" onChange={handleChange} />
                </label><br/><br/>
                <button type="submit" className="submit" >Sign Up</button>
            </form>
            </div>
        </div>
    )
}

export default Register

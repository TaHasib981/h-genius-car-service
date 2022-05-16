import React from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = () =>{
        navigate('/login')
    }
    const hangleRegister = event =>{
        event.preventDefault()
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }
    return (
        <div>
            <h2>this is register component</h2>
            <form  onSubmit={hangleRegister} className='regForm'>
                <h1>Registration</h1>
                <input type="text" placeholder='your name' value="" name='name' /><br /> <br />
                <input type="email" placeholder='your email' name="email" id="" /><br /><br />
                <input type="password" placeholder='your password' name="password" id="" /><br />
                <input type="submit" value="register" />
                <p>already have an account ?<span onClick={navigateLogin} className='text-danger login'>Login</span></p>

            </form>
        </div>
    );
};

export default Register;
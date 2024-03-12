import React, { useState } from 'react'
//import cardImg from './Images/istockphoto-1501391264-2048x2048.jpg'
import backgroundImg from './Images/pexels-robin-1020370.jpg'
import '../StyleSheets/LoginPage.css'
import { useNavigate } from 'react-router-dom';

function LoginPage({onSubmit}) {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
     if (password.length>5) {
           navigate('/homepage');
        } else {
          alert('Invalid credentials. Please try again.');
           }
      };

    return (
        <div>
            <div className='login-page-container'>
                <img className='card-Img' src={backgroundImg} alt='login-Img' />
                <div className='login-card'>
                    <h1 className='login-card-heading-1'>Shop <span className='login-card-heading-2'>Trendz</span> </h1>
                    <form onSubmit={handleSubmit}>
                    <div className='input-field-container'>
                        <label className='label-element '>UserName</label><br />
                          <input className='input-field' type='text' id='username' value={userName}
                         onChange={(e) => setUserName(e.target.value)} />  <br />
                         <label className='label-element '>Password</label><br />
                        <input className='input-field' type='password' id='password' value={password}
                         onChange={(e) => setPassword(e.target.value)} /> <br />   
                        <input className='login-button' type='submit' value="Login"/>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default LoginPage


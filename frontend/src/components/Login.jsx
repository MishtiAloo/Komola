import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const [pass, setPass] = useState ('');
  const [name, setName] = useState ('');
  const [passAttempted, setPassAttempted] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [notValidUsername, setNotValidUsername] = useState(false);
  const [notValidPassword, setNotValidPassword] = useState(false);

  const navigate = useNavigate();

  async function loginHandler () {
    setLoginAttempted(true);
    setPassAttempted(true);

    if (!name || !pass) return;

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: name, password: pass }),
      });
  
      const data = await res.json();
      console.log(data);
      
      if (res.status == 404) setNotValidUsername(true);
      if (res.status == 401) setNotValidPassword(true);
      if (res.ok && data.success) navigate ('/homepage', {state: {user: data}});

    } catch (error) {
      console.error("Error:", error);
    }
  }

  function signUpHandler () {
    navigate('/signup')
  }

  return (
    <div className='form-div'>
        <p className='label'>Login</p>
        
        <input 
          type="text" 
          placeholder='Username' 
          value={name} 
          onChange={(e)=>{
            setName(e.target.value);
          }}
        />
        {(loginAttempted && !name) && <p className='alert'>Name must not be empty</p>}
        {notValidUsername && <p className='alert'>No such username exist</p>}

        <input 
          type="password" 
          placeholder='Password' 
          value={pass} 
          onChange={(e)=>{
            setPass(e.target.value);
            setPassAttempted(true);
          }}
        />
        {(loginAttempted && !pass) && <p className='alert'>Pass must not be empty</p>}
        {notValidPassword && <p className='alert'>Pass didnt match</p>}

        {passAttempted && <Link className='alert' to = '/forgotPass'>Forgot Pass?</Link>}

        <button onClick={loginHandler}>Login</button>

        <div>
          <p id='no-account'>Dont have an Account?</p>
          <button onClick={signUpHandler}>SignUp</button>
        </div>
    </div>
  )
}

export {Login}
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [age, setAge] = useState ();
  const [image, setImage] = useState('');
  const [pass, setPass] = useState ('');
  const [cpass, setCPass] = useState ('');
  const [signUpAttempted, setSignUpAttempted] = useState(false);
  const [isDuplicateEmail, setIsDuplicateEmail] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp (){
    setSignUpAttempted(true);

    if (!name || !pass || !email || !cpass || !age) return;

    const body = {
      "userName": name,
      "email": email,
      "password" : pass,
      "age": age,
      "image": image,
      "userType": "visitor"
    };

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      const data = await res.json();
      console.log(data);
      console.log(data.message);

      if (res.status == 411) setIsDuplicateEmail(true);
      if (res.ok && data.success) navigate ('/login');
      
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleCancel () {
    navigate('/login');
  }

  return (
    <div className='form-div'>
        <p id='label'>SignUp</p>
        
        <input 
          type="text" 
          placeholder='Username' 
          value={name} 
          onChange={(e)=>{
            setName(e.target.value);
          }}/>
        {(signUpAttempted && !name) && <p className='alert'>Name must not be empty</p>}

        <input 
          type="email" 
          placeholder='Email' 
          value={email} 
          onChange={(e)=>{
            setEmail(e.target.value);
          }}/>
        {(signUpAttempted && !email) && <p className='alert'>Email must not be empty</p>}
        {isDuplicateEmail && <p className='alert'>Email already exist</p>}

        <input 
          type="number" 
          placeholder='Age' 
          value={age} 
          onChange={(e)=>{
            setAge(e.target.value);
          }}/>
        {(signUpAttempted && !age) && <p className='alert'>Age must not be empty</p>}

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px'}}>
          <p>Khomar chobi dao</p>
          <input
          type="file" 
          accept='image/*'
          value={image} 
          onChange={(e)=>{
            setImage(e.target.value);
          }}/>
        </div>

        <input 
          type="password" 
          placeholder='Password' 
          value={pass} 
          onChange={(e)=>{
            setPass(e.target.value);
          }}/>
        {(signUpAttempted && !pass) && <p className='alert'>Pass must not be empty</p>}

        <input 
          type="password" 
          placeholder='Confirm Password' 
          value={cpass} 
          onChange={(e)=>{
            setCPass(e.target.value);
          }}/>
        {(signUpAttempted && (pass != cpass)) && <p className='alert'>Pass didnt match</p>}

        <div style={{display: 'flex', gap: '10px'}}>
          <button style={{flex: '1'}} onClick={handleSignUp}>SignUp</button>
          <button style={{flex: '1'}} onClick={handleCancel}>Cancel</button>
        </div>

    </div>
  )
}

export default SignUp
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"
import logo from './logo.png'
function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e =>{e.preventDefault()
    
      // firebase crediential wil be here 
      auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {navigate('/')})
        .catch(error => alert(error.message))
  }

  const register = e => {e.preventDefault()
  
    // here will be fire base stuff for firebase register 

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {console.log(auth)
                          if(auth) {
                            navigate('/')
                          }
        })
        // it will log that it succesfully created a user with a password 
        .catch(error => alert(error.message))
        // it will show the alert 
  }

  return (
    <div className='login'>
      <Link to="/">
            <img className='login_img' 
            src={logo} 
            alt='img not found' />
        </Link>

      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>
        </form>
        
        <p>
        <input type='checkbox'/>  By signing-in you agree to the Condition of use & Sale.Plaese see our Privacy Notice, our Cookies Notices and our Intrests-Based Ads Notices...
        </p>

        <button className='login_registerButton'  onClick={register}>Register as a new customer</button>

      </div>
    </div>
  )
}

export default Login

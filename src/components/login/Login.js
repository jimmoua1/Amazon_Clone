import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import { auth } from "../../firebase"


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = e => {
    // when submitting  no refreshing
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // once successfully authenthicate login and go to Amazon Home Page
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo" src="https://i.imgur.com/covfvPN.png" alt="amazon logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login

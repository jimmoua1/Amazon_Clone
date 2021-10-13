import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo" src="https://i.imgur.com/covfvPN.png" alt="amazon logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button className="login__registerButton">Create your Amazon Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login

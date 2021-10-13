import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo" src="https://i.imgur.com/covfvPN.png" alt="amazon logo" />
      </Link>
    </div>
  )
}

export default Login

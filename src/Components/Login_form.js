import React from 'react'
import './login.css'

export default function Login_form() {
  return (
    <>
    <div className="form-container">
        <div className="card">
            <h2>Login Form</h2>
            <form>
            <label for="username">U ID</label>
            <input type="text" id="username" placeholder="Enter your ID"/>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password"/>

            <button type="submit">Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

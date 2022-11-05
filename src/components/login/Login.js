import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"; 
const login = () => {
  return (
    <div>
    <form className="box" > 
    <h1>Login</h1> 
      <input type="text" name="" placeholder="Username"/> 
      <input type="password" name="" placeholder="Password"/> 
      <button className='btn' ><Link to="/home">SUBMIT</Link></button> 
  </form> 
    </div>
  )
}

export default login
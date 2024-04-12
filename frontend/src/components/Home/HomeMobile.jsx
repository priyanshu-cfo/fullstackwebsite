import React from 'react'
import { Link } from 'react-router-dom'
const HomeMobile = () => {
  return (
    <div>
      <p>HomeMobile</p>
      <h1>Signup</h1>
      <Link to='register'>Register</Link>
      <Link to='login'>Login</Link>
    </div>
  )
}

export default HomeMobile
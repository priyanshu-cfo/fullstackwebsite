import React, { useState } from 'react'
import axios from 'axios'
import './NavbarDesktop.css'
import { Link, NavLink } from 'react-router-dom';

import {FaBiohazard, FaBookSkull, FaChevronDown, FaComputer} from 'react-icons/fa6'
import {MdAddCall} from 'react-icons/md'
import {IoIosHome} from 'react-icons/io'
import {GrOrganization} from 'react-icons/gr'
import {PiSignInBold} from "react-icons/pi"

const NavbarDesktop = () => {
  
  //User authentication : conditional rendring for some nav element
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');


  const handleLogin = async() =>{
    try {
      const response = await axios.post('/api/v1/user/login', {
        username
      });
      setUsername(username)
      const {user, accessToken, refreshToken} = response.data;

      //save token user local storage or session storage
      localStorage.setItem('accessToken',accessToken);
      localStorage.setItem('refreshToken',refreshToken);
      setIsLoggedIn(true);
      window.location.href='/dashboard';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className="navbar">
      <div className="left">
        <span><FaBiohazard/>TcscClub</span>
      </div>
      <div className="center">
        <ul>  
          <li>
          <NavLink to="/" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
          <span className='center-nav-element'><IoIosHome/>Home</span>
          </NavLink>
          </li>
          <li>
          <NavLink to="/projects" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
            <span className='center-nav-element'><FaBookSkull/>Projects<FaChevronDown/></span>
          </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
            <span className='center-nav-element'><FaComputer/>Events<FaChevronDown/></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
            <span className='center-nav-element'><GrOrganization/>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
            <span className='center-nav-element'><MdAddCall/>Contact</span>
            </NavLink>
          </li>


          {isLoggedIn ? (
          <>
          <li>
          <NavLink to="/dashboard" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
            <span className='center-nav-element'><MdAddCall/>Dashboard</span>
            </NavLink>
          </li>
          </>) : (
          <>
          <NavLink to="/register" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
            <span className='center-nav-element'><MdAddCall/>register</span>
            </NavLink>
          </>
          )}


        </ul>
      </div>
      <div className="right">
      <NavLink to="/login" className={({isActive})=> `${isActive ? "text-orange-500" : "text-gray-700"}`}>
      <span><PiSignInBold/>SignIn</span>
      </NavLink>
      </div>
    </div>
    </>
  )
}

export default NavbarDesktop
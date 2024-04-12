import React from 'react'
import './NavbarMobile.css'
import {FaDiscord, FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa6'
import {FaBiohazard, FaBookSkull, FaChevronDown, FaComputer} from 'react-icons/fa6'
import {MdAddCall} from 'react-icons/md'
import {IoIosHome} from 'react-icons/io'
import {GrOrganization} from 'react-icons/gr'
import {PiSignInBold} from "react-icons/pi"


const NavbarMobile = () => {
  return (
    <>
     <header>
        <div className="logo-new">
           <span className="websiteName"><FaBiohazard/>TcscClub</span>
        </div>
        <input type="checkbox" id="nav_check" hidden/>
        <nav>
            <div className="logo-new">
                <span className="websiteName"><FaBiohazard/>TcscClub</span>
            </div>
            <ul>  
                <li><span><IoIosHome/>Home</span></li>
                <li><span><FaBookSkull/>Projects<FaChevronDown/></span></li>
                <li><span><FaComputer/>Events<FaChevronDown/></span></li>
                <li><span><GrOrganization/>About</span></li>
                <li><span><MdAddCall/>Contact</span></li>
                <li><span><PiSignInBold/>SignIn</span></li>
            </ul>

            <div className="navbar-icon-bottom-mobileView">
                <div className="nav-icon-mobileView">
                    <div className="same-icon-mobileView"><FaGithub/></div>
                    <div className="same-icon-mobileView"><FaInstagram/></div>
                    <div className="same-icon-mobileView"><FaDiscord/></div>
                    <div className="same-icon-mobileView"><FaTwitter/></div>
                    <div className="same-icon-mobileView"><FaFacebook/></div>
                </div>
                <hr className="horizontal-line-mobileView"/>
                <p id="copyright-mobileView">&#169; TcscClub | All Right Reserved</p>
            </div>

        </nav>
        <label htmlFor="nav_check" className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </label>
    </header>
    </>
  )
}

export default NavbarMobile
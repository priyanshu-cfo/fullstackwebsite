import React, {useCallback,useEffect,useState} from 'react'
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

const Navbar = () => {
  const [isDesktopOrMobile, setIsDesktopOrMobile] = useState(window.innerWidth >= 950);
  
  const checkWidth = useCallback(()=>{
    setIsDesktopOrMobile(window.innerWidth >= 950);
  },[])

  useEffect(()=>{
    window.addEventListener('resize',checkWidth);
    return()=>{
      window.removeEventListener('resize',checkWidth)
    }
  },[checkWidth])

  return (
    <>
      {isDesktopOrMobile ? <NavbarDesktop/> : <NavbarMobile/>}
    </>
  )
}

export default Navbar
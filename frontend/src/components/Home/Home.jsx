import React, {useCallback,useEffect,useState} from 'react'
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

const Home = () => {
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
      {isDesktopOrMobile ? <HomeDesktop/> : <HomeMobile/>}
    </>
  )
}

export default Home
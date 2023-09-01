import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
const ScrollTop = () => {
    const pathName = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathName])
  return (
    <div>

    </div>
  )
}

export default ScrollTop
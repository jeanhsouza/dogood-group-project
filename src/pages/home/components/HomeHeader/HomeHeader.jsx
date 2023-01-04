import React, { useState } from "react"
import { StyledHomeHeader } from "./style"
import logo from './../../../../assets/logo.png'
import dropButton from './../../../../assets/dropdownmenu.png'

const HomeHeader = () => {
    const [ isActive, setIsActive ] = useState(false)

    function showMenu () {
        setIsActive(!isActive)
        console.log(isActive)
    }


  return (
    <StyledHomeHeader>
        <div>
            <img src={logo} alt="logo" />
            <button onClick={showMenu}>
                <img src={dropButton} alt="menu" />
            </button>
        </div>
        {(isActive ? <nav>
            <ul>
                <li>HOME</li>
                <li>DONATIONS</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
                <li>LANDING</li>
            </ul>
        </nav> : null)}
        
    </StyledHomeHeader>
  )
}

export default HomeHeader
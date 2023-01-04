import React, { useState } from "react"
import logo from './../../assets/logo.png'
import dropButton from './../../assets/dropdownmenu.png'
import closeDropButton from './../../assets/closedropmenu.png'
import { StyledHeader } from "./style"
const Header = () => {
    const [ isActive, setIsActive ] = useState(false)

    function showMenu () {
        setIsActive(!isActive)
        console.log(isActive)
    }


  return (
    <StyledHeader>
        <div>
            <img src={logo} alt="logo" />
            {(!isActive ? 
                <button onClick={showMenu}>
                    <img src={dropButton} alt="menu" />
                </button> : <button onClick={showMenu}>
                    <img src={closeDropButton} alt="closeMenu" />
                </button>
            )}
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
        
    </StyledHeader>
  )
}

export default Header
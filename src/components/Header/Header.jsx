import React, { useState } from "react"
import logo from "./../../assets/logo.png"
import dropButton from "./../../assets/dropdownmenu.png"
import closeDropButton from "./../../assets/closedropmenu.png"
import { StyledHeader } from "./style"
import { Link } from "react-router-dom"
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
                <Link to="/home">
                    <li>HOME</li>
                </Link>
                <Link to="/login">
                    <li>LOGIN</li>
                </Link>
                <Link to="/register">
                    <li>REGISTER</li>
                </Link>
                <Link to="/profile/:id">
                    <li>PROFILE</li>
                </Link>
                <Link to="/dashboard">
                    <li>DASHBOARD</li>
                </Link>
            </ul>
                


        </nav> : null)}
        
    </StyledHeader>
  )
}

export default Header
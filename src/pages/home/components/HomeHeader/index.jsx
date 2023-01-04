import React from 'react'
import { StyledHomeHeader } from './style'
import donateImage from './../../../../assets/donatenow.png'


const HomeHeader = () => {
  return (
    <StyledHomeHeader>
        <img src={donateImage} alt="donateImage" />
        <div>
            <span>
                <h2>Nossa Meta:</h2>
                <h3>$65.000</h3>
            </span>
            <span>
                <h2>Arrecadados:</h2>
                <h3>$45.000</h3>
            </span>
            <span>
                <h2>ONGs Cadastradas:</h2>
                <h3>10</h3>
            </span>
        </div>
    </StyledHomeHeader>
  )
}

export default HomeHeader
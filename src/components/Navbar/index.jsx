import React from 'react'
import './styles.scss'

import LogoWords from '../../assets/images/logo_words.png'

function Navbar() {
  return (
    <nav>
        <img src={LogoWords} alt="Plauto Logo" />
    </nav>
  )
}

export default Navbar
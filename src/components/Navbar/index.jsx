import React from 'react'
import './styles.scss'

import LogoWords from '../../assets/images/logo_words.png'
import MobileNavbar from '../../assets/images/mobile_navbar.png'

function Navbar() {
  return (
    <nav>
        <img src={LogoWords} alt="Plauto Logo" className='words' />
        <img src={MobileNavbar} alt="Plauto Logo" className='square' />
    </nav>
  )
}

export default Navbar
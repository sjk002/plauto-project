import React from 'react'
import './styles.scss'

import LogoWords from '../../assets/images/plauto_logo.png'

function Navbar() {
  return (
    <nav>
        <img src={LogoWords} alt="Plauto Logo" className='words' />
    </nav>
  )
}

export default Navbar
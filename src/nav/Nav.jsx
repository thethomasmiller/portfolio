import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function nav() {
  return (
    <div>
      <div className='name-position-container'>
        <div className='name-header' ><div>thomas</div><div>miller</div></div>
        <div className='tagline'><div>full stack web developer | storyteller</div></div>
      </div>
      <div className='nav-links'>
        <Link to='/' style={{ textDecoration: 'none', color: '#FBFFFB' }} className='home-link'>home</Link>
        <Link to='/about' style={{ textDecoration: 'none', color: '#FBFFFB' }} className='about-link'>about</Link>
        <Link to='/portfolio' style={{ textDecoration: 'none', color: '#FBFFFB' }} className='portfolio-link'>portfolio</Link>
        <Link to='/contact' style={{ textDecoration: 'none', color: '#FBFFFB' }} className='contact-link'>contact</Link>

      </div>
    </div>
  )
}

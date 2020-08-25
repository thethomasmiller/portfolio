import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function nav() {
  return (
    <div>
      <div>
        <div className='name-header'><div>thomas miller</div></div>
        <div className='tagline'><div>software engineer | creative thinker </div></div>
      </div>
      <div className='nav-links'>
        <Link to='/' style={{ textDecoration: 'none', color: '#5AC6D6' }} className='home-link'>home</Link>
        <Link to='/about' style={{ textDecoration: 'none', color: '#5AC6D6' }} className='about-link'>about</Link>
        <Link to='/portfolio' style={{ textDecoration: 'none', color: '#5AC6D6' }} className='portfolio-link'>portfolio</Link>
        <Link to='/contact' style={{ textDecoration: 'none', color: '#5AC6D6' }} className='contact-link'>contact</Link>

      </div>
    </div>
  )
}

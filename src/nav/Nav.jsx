import React from 'react'
import './Nav.css'
import { useSpring, animated } from 'react-spring'

export default function Nav() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2500 } })
  return (
    <div>
      <animated.div style={props}>
        <div className='header-block-one'></div>
        <div className='header-block-two'></div>
        <div className='header-block-three'></div>
      </animated.div>
      <div className='name-position-container'>
        <div className='name-header' ><div className='first-name-header'>thomas</div><div >miller</div></div>
        <div className='tagline'><div>full stack web developer | storyteller</div></div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center" style={{backgroundColor: '#FBDDAF'}} >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" style={{ color: '#293C43' }} href="/">HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  style={{ color: '#293C43' }} href="/about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  style={{ color: '#293C43' }} href="/portfolio">PORTFOLIO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  style={{ color: '#293C43' }} href="/contact">CONTACT</a>
            </li>
          </ul>
          <span class="navbar-text">
            
    </span>
        </div>
      </nav>
    </div>
  )
}

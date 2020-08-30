import React from 'react'
import ellipseOne from '../assets/ellipseOne.svg'
import ellipseTwo from '../assets/ellipseTwo.svg'
import OrigioSlide from '../assets/OrigioSlide.svg'
import DancepartySlide from '../assets/DancepartySlide.svg'
import FloraSlide from '../assets/FloraSlide.svg'
import SubbustersSlide from '../assets/SubbustersSlide.svg'

import Nav from '../nav/Nav'
import './Home.css'
import { useSpring, animated } from 'react-spring'

export default function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2500 } })
  return (
    <div className='home'>

      <animated.div style={props}><img alt='Ellipse' src={`${ellipseOne}`} className='ellipseOne' /></animated.div>
      <animated.div style={props}> <img alt='Ellipse' src={`${ellipseTwo}`} className='ellipseTwo' /> </animated.div>
      <Nav />
      <div className='carousel-container'>
        <div className='carousel-title'>
          recent work
      </div>

        <div className='home-carousel'>
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={`${OrigioSlide}`} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
              <div class="carousel-item">
                <img src={`${FloraSlide}`} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
              <div class="carousel-item">
                <img src={`${DancepartySlide}`} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
              <div class="carousel-item">
                <img src={`${SubbustersSlide}`} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>

          </div>
        </div>
      </div>

      <div className='copyright'>
          <div>copyright 2020 thomas miller</div>
        </div>
    </div>
  )
}

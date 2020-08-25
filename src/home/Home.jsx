import React from 'react'
import { Link } from 'react-router-dom'
import ellipseOne from '../assets/ellipseOne.svg'
import ellipseTwo from '../assets/ellipseTwo.svg'

import Nav from '../nav/Nav'
import './Home.css'
import { useSpring, config, animated } from 'react-spring'

export default function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2500 } })
  return (
    <div className='home'>

      <animated.div style={props}><img src={`${ellipseOne}`} className='ellipseOne' /></animated.div>
      <animated.div style={props}> <img src={`${ellipseTwo}`} className='ellipseTwo' /> </animated.div>
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
                <img src="https://i.imgur.com/rHFJaBR.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5></h5>
                  <p></p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://i.imgur.com/8X4GS4g.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5></h5>
                  <p></p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://i.imgur.com/d3zp15z.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5></h5>
                  <p></p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://i.imgur.com/84iPk3G.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5></h5>
                  <p></p>
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


        <div className='copyright'>
          <div>copyright 2020 thomas miller</div>
        </div>
      </div>






    </div>
  )
}

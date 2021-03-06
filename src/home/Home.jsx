import React from 'react'
import { Link } from 'react-router-dom'
import OrigioSlide from '../assets/OrigioSlide.svg'
import DancepartySlide from '../assets/DancepartySlide.svg'
import FloraSlide from '../assets/FloraSlide.svg'
import SubbustersSlide from '../assets/SubbustersSlide.svg'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
import './Home.css'

export default function Home() {

  return (<>
    <div className='home'>
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
                <Link to='/portfolio'><img src={`${OrigioSlide}`} class="d-block w-100 " alt="..." /></Link>
                <div class="carousel-caption d-none d-md-block">

                </div>
              </div>
              <div class="carousel-item">
                <Link to='/portfolio'> <img src={`${FloraSlide}`} class="d-block w-100" alt="..." /> </Link>
                <div class="carousel-caption d-none d-md-block">

                </div>
              </div>
              <div class="carousel-item">
                <Link to='/portfolio'> <img src={`${DancepartySlide}`} class="d-block w-100" alt="..." /></Link>
                <div class="carousel-caption d-none d-md-block">

                </div>
              </div>
              <div class="carousel-item">
                <Link to='/portfolio'> <img src={`${SubbustersSlide}`} class="d-block w-100" alt="..." /> </Link>
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
    </div>
    <div className='copyright'>
      <div className='wrapper'>copyright 2020 thomas miller</div>
    </div>
    <Footer />
  </>
  )
}

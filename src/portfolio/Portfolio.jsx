import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import PortfolioItem from '../portfolioitem/PortfolioItem'
import './Portfolio.css'


export default function Portfolio() {
  return (
    <div className='portfolio-screen'>
      <Nav />
      <PortfolioItem />
      <Footer/>
    </div>
  )
}

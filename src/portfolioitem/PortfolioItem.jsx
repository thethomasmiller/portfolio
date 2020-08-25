import React from 'react'
import './PortfolioItem.css'
import GitHubIcon from '../GitHubIcon'


export default function PortfolioItem() {





  return (
    <div className='icons-container-container'>
      <div className='icons-container'>
        <div className='icon-card'>
          <img className='icon-img' src='https://i.imgur.com/vtKDO6y.png' />
          <div className='icon-details'>
            <div className='origio-title'>ORIGIO</div> 
            <div>An intentional space for makers</div>
            <a href='https://github.com/thethomasmiller/ORIGIO'><GitHubIcon /></a>
          </div>

        </div>
        <div className='icon-card'>
          <img className='icon-img' src='https://i.imgur.com/MinRjbU.png' />
          <div className='icon-details'>
            <div className='danceparty-title'>DANCEPARTY</div>
            <div>A Virtual Fun Zone</div>
            <a href='https://github.com/thethomasmiller/dance-party'><GitHubIcon /></a>
          </div>

        </div>

        <div className='icon-card'>
          <img className='icon-img' src='https://i.imgur.com/wlpzWDq.png' />
          <div className='icon-details'>
            <div className='flora-title'>FLORA</div> 
            <div>Find new plants</div>
            <a href=''><GitHubIcon /></a>
          </div>

        </div>

        <div className='icon-card'>
          <img className='icon-img' src='https://i.imgur.com/ddoYcKo.png' />
          <div className='icon-details'>
            <div className='subbusters-title'>SubBusters</div>
            <div className='subbusters-tagline'>A UX/DI x SEI Collaboration</div>
            <div>Manage your paid subscription services</div>
            <a href='https://github.com/thethomasmiller/SubBusters'><GitHubIcon /></a>
          </div>
        </div>


      </div>
    </div>
  )
}

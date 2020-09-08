import React from 'react'
import './PortfolioItem.css'
import GitHubIcon from '../GitHubIcon'


export default function PortfolioItem() {





  return (
    <div className='icons-container-container'>
      <div className='icons-container'>
        <div className='icon-card'>
          <a target="_blank" rel="noopener noreferrer" href='http://origio.surge.sh/'><img alt='Origio Icon' className='icon-img' src='https://i.imgur.com/vtKDO6y.png' /></a>
          <div className='icon-details'>
            <div className='origio-title'>ORIGIO</div> 
            <div className='app-tagline'>A space for makers</div>
            <a href='https://github.com/thethomasmiller/ORIGIO'><GitHubIcon /></a>
          </div>

        </div>
        <div className='icon-card'>
        <a target="_blank" rel="noopener noreferrer" href='https://dancepartydanceparty.netlify.app/'> <img alt= 'Danceparty Icon' className='icon-img' src='https://i.imgur.com/MinRjbU.png' /></a>
          <div className='icon-details'>
            <div className='danceparty-title'>DANCEPARTY</div>
            <div className='app-tagline'>Socially-distanced fun</div>
            <a href='https://github.com/thethomasmiller/dance-party'><GitHubIcon /></a>
          </div>

        </div>

        <div className='icon-card'>
          <img alt= 'Flora Icon' className='icon-img' src='https://i.imgur.com/wlpzWDq.png' />
          <div className='icon-details'>
            <div className='flora-title'>FLORA</div> 
            <div className='app-tagline'>Find new plants</div>
            <a href='https://github.com/thethomasmiller/flora'><GitHubIcon /></a>
          </div>

        </div>

        <div className='icon-card'>
        <a target="_blank" rel="noopener noreferrer" href='http://subbusters.surge.sh/'><img alt= 'Subbusters Icon' className='icon-img' src='https://i.imgur.com/ddoYcKo.png' /></a>
          <div className='icon-details'>
            <div className='subbusters-title'>SubBusters</div>
            <div className='subbusters-tagline'>A UX/DI x SEI Collaboration</div>
            <div className='app-tagline'>Manage your subscriptions</div>
            <a href='https://github.com/thethomasmiller/SubBusters'><GitHubIcon /></a>
          </div>
        </div>


      </div>
    </div>
  )
}

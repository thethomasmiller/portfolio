import React from 'react'
import Nav from '../nav/Nav'
import gitHubIcon from '../assets/gitHubIcon.png'
import liIcon from '../assets/liIcon.png'
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <Nav />
     <a href='https://www.linkedin.com/in/thethomasmiller/'> <img className='contact-li-icon' src={`${liIcon}`}/> </a>
     <a href='https://github.com/thethomasmiller'> <img className='contact-github-icon' src={`${gitHubIcon}`}/> </a>

    </div>
  )
}

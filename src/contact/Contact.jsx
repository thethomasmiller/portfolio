import React from 'react'
import Nav from '../nav/Nav'
import gitHubIcon from '../assets/gitHubIcon.png'
import liIcon from '../assets/liIcon.png'
import ContactForm from '../ContactForm'
import Footer from '../footer/Footer'
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className='contact-screen'>
        <div className='contact-icon-container'>

          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/thethomasmiller/'> <img alt='linked-in' className='contact-li-icon' src={`${liIcon}`} /> </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/thethomasmiller'> <img alt='github-icon' className='contact-github-icon' src={`${gitHubIcon}`} /> </a>
        </div>
        <ContactForm />
      </div>
      <Footer/>
    </div>
  )
}

import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import './About.css'


export default function About() {
  return (
    <div>
      <Nav />
      <div className='about-screen'>
        <div className='pic-paragraph'>
      <img alt='Profile' className='about-pic' src='https://i.imgur.com/BzDZeX2.png'/>
        <div className='about-container'>
          <div className="about-greeting">Hello there!</div>
        <div>
          I am a software engineer with a passion for human connection.
          With over 10 years of experience as an artist, teacher, and leader,
          I am seeking a software engineering role where collaboration, creativity and growth are core values. Thanks for visiting, and please reach out. I'd love to hear from you.
        </div>
        <div>Sincerely,</div>
        <div>Thomas</div>
        </div>
        </div>
        <a rel="noopener noreferrer" target="_blank" className='resume-link' href="https://drive.google.com/file/d/1vTsRN2Ili_BmvKqct9gRcVeHaycTTeFX/view?usp=sharing">RESUME</a>

       


      </div>

      <Footer />

    </div>
  )
}

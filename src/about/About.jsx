import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import './About.css'


export default function About() {
  return (
    <div>
      <Nav />
      <div className='about-screen'>

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

        <a rel="noopener noreferrer" target="_blank" className='resume-link' href="https://docdro.id/wIQ9N3B">RESUME</a>


      </div>

      <Footer />

    </div>
  )
}

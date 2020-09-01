import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <form className='contact-form' netlify-honeypot='bot-field' name="contact" action='/' method='post' netlify>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">
        
        </label> <br />
        <input type="text" name="name" id="yourname" placeholder='Your Name'/>
      </p>
      <p>
        <label htmlFor="youremail">
         
        </label> <br />
        <input type="email" name="email" id="youremail" placeholder='Your Email' />
      </p>
      <p>
        <label htmlFor="yourmessage">
        </label> <br />
        <textarea name="message" id="yourmessage" placeholder='Your Message'></textarea>
      </p>
      <p>
        <button className='submit-button' type="submit">Send</button>
      </p>
    </form>
  )
}

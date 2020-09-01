import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <form className='contact-form' netlify-honeypot='bot-field' name="contact" action='/' method='post' netlify>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button className='submit-button' type="submit">Send</button>
      </p>
    </form>
  )
}

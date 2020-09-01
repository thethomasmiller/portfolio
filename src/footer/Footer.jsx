import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Footer.css'

export default function Footer() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2500}})
  return (
    <div className='footer'>
      <animated.div style={props}> 
      <div className="footer-block-one"></div>
      <div className="footer-block-two"></div>
      <div className="footer-block-three"></div>
      <div className="footer-block-four"></div>
      </animated.div>
    </div>
  )
}

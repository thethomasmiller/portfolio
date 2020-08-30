import React from 'react'
import gitHubIcon from './assets/gitHubIcon.png'
import './GitHubIcon.css'

export default function GitHubIcon() {
  return (
    <div>
       <img alt='Github Icon' className='github-icon' src={`${gitHubIcon}`}/> 
    </div>
  )
}

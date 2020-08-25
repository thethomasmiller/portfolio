import React from 'react'
import gitHubIcon from './assets/gitHubIcon.png'
import './GitHubIcon.css'

export default function GitHubIcon() {
  return (
    <div>
       <img className='github-icon' src={`${gitHubIcon}`}/> 
    </div>
  )
}

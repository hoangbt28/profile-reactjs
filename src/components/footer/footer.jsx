import React from 'react'
import './footer.css'
import {BsFacebook, BsGithub} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <h2 className='footer__h2'><a href="#" className='footer__logo'>MY PROFILE</a></h2>
      <ul className='permalinks'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/"><BsFacebook /></a>
        <a href="https://www.instagram.com/"><AiFillInstagram /></a>
        <a href="https://github.com/"><BsGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All rights reserved. 2022</small>
      </div>
    </footer>
  )
}

export default Footer
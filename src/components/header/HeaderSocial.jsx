import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineGithub, AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/hoanggg2805/"><AiFillFacebook/></a>
        <a href="https://github.com/"><AiOutlineGithub/></a>
        <a href="https://www.instagram.com/"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocial
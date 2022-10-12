import React from 'react'
import './header.css'
import ME from '../../assets/Trang_An-removebg-preview.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm </h5>
            <h1>Tiến Hoàng</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <HeaderSocial/>

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
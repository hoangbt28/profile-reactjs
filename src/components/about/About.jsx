import React from 'react'
import './about.css'
import ME from '../../assets/moto.jpg'
import { FaAward } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>

            <article className='about__card'>
              <CgProfile className='about__icon'/>
              <h5>Profile</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Project</h5>
              <small>3+ Project complete</small>
            </article>
          </div>
          <p>
          Hello everyone, my name is Tien Hoang. I'm form Nam Dinh province. Now, I am an information technology student of PTIT in Ha Noi. I love programing and design. So I want to become a Front end developer. With the basic knowledge, I hope to be able to meet the minimum requirements of your company. 
          Thank you!!!
          </p>
          <a href="#contact" className='btn btn-primary'>MORE...</a>
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Nav from './components/nav/nav'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Footer/>
    </>
  )
}

export default App
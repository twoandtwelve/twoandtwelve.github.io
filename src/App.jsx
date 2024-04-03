import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}


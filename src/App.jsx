import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Projects from './components/Projects/Projects'
import SocialMedia from './components/SocialMedia'
import UpButton from './components/UpButton'
import WhatsappButton from './components/WhatsappButton'

function App() {

  return (
    <div className="App">
      <Header />
      <Introduction />
      <SocialMedia />
      <WhatsappButton />
      <About />
      <Projects />
      <Contact />
      <UpButton />
      <Footer />
    </div>
  )
}

export default App

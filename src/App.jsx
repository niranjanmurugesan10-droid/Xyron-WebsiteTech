import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Pricing from './Components/Pricing/Pricing'



function App() {
  return (
    <div>
      <Navbar />
     <Home/>
     <About/>
     <Services/>
      <Projects/>
      <Pricing/>
      <Contact/>
     <Footer/>
    </div>
  )
}

export default App
import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Pricing from './Components/Pricing/Pricing'

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('xyron-theme')
    if (storedTheme) return storedTheme

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('xyron-theme', theme)
  }, [theme])

  useEffect(() => {
    const cards = document.querySelectorAll('.service-card, .Pricing-card, .about-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.18,
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const cursorFollowerRef = useRef(null)
  const cursorDotRef = useRef(null)
  const animationFrameRef = useRef(null)
  const mouseX = useRef(window.innerWidth / 2)
  const mouseY = useRef(window.innerHeight / 2)
  const posX = useRef(window.innerWidth / 2)
  const posY = useRef(window.innerHeight / 2)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover)').matches
    if (theme !== 'dark' || !canHover) return

    const follower = cursorFollowerRef.current
    const dot = cursorDotRef.current
    if (!follower || !dot) return

    const interactiveSelectors = [
      'button',
      'a',
      '.service-card',
      '.Pricing-card',
      '.about-card',
      '.project-card',
      '.nav-btn',
      '.header-btn1',
      '.header-btn2',
      '.hero-scroll',
    ].join(', ')

    const updateCursor = () => {
      posX.current += (mouseX.current - posX.current) * 0.18
      posY.current += (mouseY.current - posY.current) * 0.18

      follower.style.transform = `translate3d(${posX.current - 75}px, ${posY.current - 75}px, 0)`
      dot.style.transform = `translate3d(${mouseX.current - 6}px, ${mouseY.current - 6}px, 0)`
      animationFrameRef.current = requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (event) => {
      mouseX.current = event.clientX
      mouseY.current = event.clientY
      dot.style.opacity = '1'
      follower.style.opacity = '1'
    }

    const handleMouseOut = (event) => {
      if (!event.relatedTarget) {
        dot.style.opacity = '0'
        follower.style.opacity = '0'
      }
    }

    const handlePointerMove = (event) => {
      const interactive = event.target.closest(interactiveSelectors)
      const isHover = Boolean(interactive)
      if (isHover) {
        dot.classList.add('cursor-hover')
        follower.classList.add('cursor-hover')
      } else {
        dot.classList.remove('cursor-hover')
        follower.classList.remove('cursor-hover')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('mousemove', handlePointerMove)
    animationFrameRef.current = requestAnimationFrame(updateCursor)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('mousemove', handlePointerMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Home />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
      <div ref={cursorFollowerRef} className="dark-cursor-follower" />
      <div ref={cursorDotRef} className="dark-cursor-dot" />
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for navbar height
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-lg border-b border-orange-500/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-bold">忍</span>
            </div>
            <span className="text-orange-500 font-bold text-xl">Naruto</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sasuke')}
              className="text-white hover:text-purple-500 transition-all duration-300 font-medium hover:scale-105"
            >
              Sasuke
            </button>
            <button 
              onClick={() => scrollToSection('quotes')}
              className="text-white hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105"
            >
              Quotes
            </button>
            <button 
              onClick={() => scrollToSection('characters')}
              className="text-white hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105"
            >
              Characters
            </button>
            <button 
              onClick={() => scrollToSection('scroll')}
              className="text-white hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105"
            >
              Jutsu Scroll
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-500 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-orange-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-md transition-all duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('sasuke')}
                className="block w-full text-left px-3 py-2 text-white hover:text-purple-500 hover:bg-purple-500/10 rounded-md transition-all duration-300"
              >
                Sasuke
              </button>
              <button 
                onClick={() => scrollToSection('quotes')}
                className="block w-full text-left px-3 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-md transition-all duration-300"
              >
                Quotes
              </button>
              <button 
                onClick={() => scrollToSection('characters')}
                className="block w-full text-left px-3 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-md transition-all duration-300"
              >
                Characters
              </button>
              <button 
                onClick={() => scrollToSection('scroll')}
                className="block w-full text-left px-3 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-md transition-all duration-300"
              >
                Jutsu Scroll
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code, Briefcase, Award, Mail } from 'lucide-react'

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', name: 'Início', icon: Home, href: '#home' },
    { id: 'about', name: 'Sobre', icon: User, href: '#about' },
    { id: 'skills', name: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', name: 'Projetos', icon: Briefcase, href: '#projects' },
    { id: 'achievements', name: 'Conquistas', icon: Award, href: '#achievements' },
    { id: 'contact', name: 'Contato', icon: Mail, href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (item) => {
    setActiveSection(item.id)
    scrollToSection(item.href)
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }))

      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 px-2 py-2">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`relative p-3 rounded-xl transition-all duration-200 group ${
                activeSection === item.id
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-500 hover:bg-purple-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.name}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default FloatingNav

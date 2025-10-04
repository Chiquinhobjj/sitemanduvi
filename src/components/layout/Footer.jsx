import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: faLinkedin, href: 'https://linkedin.com/in/marina-santos-dev' },
    { name: 'GitHub', icon: faGithub, href: 'https://github.com/marina-santos' },
    { name: 'Instagram', icon: faInstagram, href: 'https://instagram.com/marina.dev' }
  ]

  const exploreLinks = [
    { name: 'Blog', href: '#' },
    { name: 'Recursos', href: '#' },
    { name: 'Mentoria', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-purple-50 to-blue-50 border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Character and Intro */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4">
                <span className="text-3xl sm:text-4xl">👩‍💻</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg sm:text-xl">Oi, eu sou a Marina!</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Desenvolvedora Full Stack & UX Designer criando experiências digitais incríveis
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Menu</h4>
            <ul className="space-y-2 sm:space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Redes Sociais</h4>
            <ul className="space-y-2 sm:space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base flex items-center justify-center md:justify-start gap-2"
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Explorar</h4>
            <ul className="space-y-2 sm:space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-100 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-sm sm:text-base">
              © 2024, Marina Silva Santos
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Feito com ❤️ e muito ☕ em São Paulo, Brasil
            </p>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium items-center gap-2 transition-colors duration-200 flex"
          >
            Voltar ao Topo
            <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

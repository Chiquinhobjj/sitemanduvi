import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/about' },
    { label: 'Iniciativas', path: '/projects' },
    { label: 'Conquistas', path: '/achievements' },
    { label: 'Contato', path: '/contact' }
  ]

  const branches = ['Educação que Acolhe', 'Inovação que Acolhe', 'Esporte que Acolhe', 'Cultura que Acolhe']

  const socialLinks = [
    { name: 'LinkedIn', icon: faLinkedin, href: 'https://www.linkedin.com/company/instituto-manduvi/' },
    { name: 'Instagram', icon: faInstagram, href: 'https://www.instagram.com/institutomanduvi/' },
    { name: 'YouTube', icon: faYoutube, href: 'https://www.youtube.com/@institutomanduvi' }
  ]

  return (
    <footer className="footer-gradient border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-white/70 border border-border/40 rounded-3xl px-6 py-6 shadow-sm">
          <div className="text-center lg:text-left space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">Oi, somos o Manduvi!</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              A SocialTech que une afeto, tecnologia e acolhimento para transformar vidas no Pantanal, no Brasil e além.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-3">
            <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-secondary transition-colors">
              Apoie a missão
            </button>
            <button className="px-5 py-2 rounded-full border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors">
              Seja voluntário
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1 text-center md:text-left space-y-3">
            <div className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-primary/15 text-primary text-3xl">
              🌳
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Inspirados na árvore Manduvi, cultivamos inovação, acolhimento e impacto sustentável em cada comunidade que tocamos.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-4 text-base sm:text-lg">Explorar</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-4 text-base sm:text-lg">Braços de atuação</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {branches.map((branch) => (
                <li key={branch}>{branch}</li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-4 text-base sm:text-lg">Redes Manduvi</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <p className="text-foreground/70 text-sm sm:text-base">© 2024, Instituto Manduvi</p>
            <p className="text-foreground/60 text-xs sm:text-sm mt-1">
              Feito com ❤️, inovação e acolhimento em Cuiabá · Mato Grosso · Brasil
            </p>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium items-center gap-2 transition-colors duration-200 flex"
          >
            Voltar ao topo
            <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { initiatives } from '@/data/initiatives.js'

const FloatingNav = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { id: 'home', name: 'Início', path: '/' },
    { id: 'about', name: 'Sobre', path: '/about' },
    { id: 'skills', name: 'Skills', path: '/skills' },
    {
      id: 'projects',
      name: 'Iniciativas',
      path: '/projects',
      children: [
        { id: 'projects-home', name: 'Iniciativas', path: '/projects' },
        ...initiatives.map(({ id, name }) => ({ id, name, path: `/projects/${id}` }))
      ]
    },
    {
      id: 'events',
      name: 'Eventos',
      path: '/events',
      children: [
        { id: 'events-home', name: 'Eventos', path: '/events' },
        { id: 'superralinha', name: 'Superralinha', path: '/events/superralinha' }
      ]
    },
    { id: 'achievements', name: 'Conquistas', path: '/achievements' },
    {
      id: 'redes',
      name: 'Redes',
      path: '/redes',
      children: [
        { id: 'redes-home', name: 'Redes', path: '/redes' },
        { id: 'instagram', name: 'Instagram', path: '/redes/instagram' },
        { id: 'facebook', name: 'Facebook', path: '/redes/facebook' },
        { id: 'linkedin', name: 'LinkedIn', path: '/redes/linkedin' },
        { id: 'youtube', name: 'YouTube', path: '/redes/youtube' }
      ]
    },
    { id: 'contact', name: 'Contato', path: '/contact' }
  ]

  const isActive = (itemPath) => {
    if (itemPath === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(itemPath)
  }

  const handleNavigate = (path) => {
    setOpenDropdown(null)
    setMobileOpen(false)
    if (location.pathname !== path) {
      navigate(path)
    }
  }

  const toggleDropdown = (id) => {
    setOpenDropdown((current) => (current === id ? null : id))
  }

  return (
    <motion.nav
      className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-16px)] sm:w-auto max-w-6xl"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="bg-white/90 backdrop-blur-md border border-border rounded-2xl shadow-lg px-2 sm:px-3 py-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center justify-center px-2 sm:px-3">
            <img
              src="/images/M_manduvi.svg"
              alt="Logotipo Manduvi"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => {
              const active = isActive(item.path)
              const baseClasses = `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
              }`

              if (item.children) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (openDropdown === item.id) {
                          handleNavigate(item.path)
                        } else {
                          toggleDropdown(item.id)
                        }
                      }}
                      className={`${baseClasses} inline-flex items-center gap-1`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl border border-border bg-white/95 shadow-lg backdrop-blur-md"
                        >
                          <ul className="py-2">
                            {item.children.map((child) => {
                              const isHomeOption = child.id === 'projects-home' || child.id === 'events-home' || child.id === 'redes-home'
                              return (
                                <li key={child.id}>
                                  <button
                                    type="button"
                                    onClick={() => handleNavigate(child.path)}
                                    className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                                      isHomeOption
                                        ? 'bg-primary/10 text-primary font-semibold border-b border-primary/20'
                                        : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
                                    }`}
                                  >
                                    {child.name}
                                  </button>
                                </li>
                              )
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.path)}
                  className={baseClasses}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl px-2 sm:px-3 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
            aria-label="Abrir menu"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-3 border-t border-border pt-3 max-h-[70vh] overflow-y-auto"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  if (!item.children) {
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavigate(item.path)}
                        className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.path) ? 'bg-primary text-primary-foreground' : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </button>
                    )
                  }

                  const dropdownOpen = openDropdown === item.id
                  return (
                    <div key={item.id} className="border border-border rounded-lg">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          dropdownOpen ? 'bg-primary text-primary-foreground' : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <ul className="py-2 bg-white/95">
                              {item.children.map((child) => {
                                const isHomeOption = child.id === 'projects-home' || child.id === 'events-home' || child.id === 'redes-home'
                                return (
                                  <li key={child.id}>
                                    <button
                                      type="button"
                                      onClick={() => handleNavigate(child.path)}
                                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                                        isHomeOption
                                          ? 'bg-primary/10 text-primary font-semibold border-b border-primary/20'
                                          : 'text-foreground/80 hover:bg-primary/10 hover:text-primary'
                                      }`}
                                    >
                                      {child.name}
                                    </button>
                                  </li>
                                )
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default FloatingNav

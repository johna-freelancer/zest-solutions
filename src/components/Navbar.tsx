import { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 50], [0.8, 0.95])
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1])

  const backgroundColor = useMotionTemplate`rgba(10, 10, 10, ${bgOpacity})`
  const borderColor = useMotionTemplate`rgba(38, 38, 38, ${borderOpacity})`

  const navLinks = [
    {
      name: 'The Suite',
      href: '#suite',
    },
    {
      name: 'Custom Projects',
      href: '#custom',
    },
    {
      name: 'Book a Demo',
      href: '#demo',
    },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      style={{ backgroundColor, borderBottomColor: borderColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-white/90 p-1.5 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
              <img
                src={logo}
                alt="Zest Solutions"
                className="h-10 md:h-11 w-auto object-contain"
              />
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-2"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative z-10"
                >
                  {link.name}
                </a>
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-zest rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-sm font-semibold bg-zest text-black rounded-md hover:bg-zest-hover transition-colors shadow-[0_0_15px_rgba(20,184,166,0.2)]"
            >
              Book a Demo
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-dark-secondary border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-zinc-400 hover:text-white hover:bg-dark-tertiary rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#demo"
                className="block w-full mt-4 px-4 py-2 text-sm font-semibold bg-zest text-black rounded-md hover:bg-zest-hover transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

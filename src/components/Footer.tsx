import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github } from 'lucide-react'
import logo from '../assets/logo.png'

export function Footer() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  } as const

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-50px',
      }}
      variants={containerVariants}
      className="bg-dark-primary pt-16 pb-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/90 p-2 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                <img
                  src={logo}
                  alt="Zest Solutions"
                  className="h-[7.5rem] w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6">
              Engineering modern management systems and bespoke software solutions
              for businesses that demand scale and precision. Book a demo and
              avail a 7-day free trial.
            </p>
            <p className="text-sm text-zinc-300 mb-6">
              Contact: 
              <a
                href="mailto:demo@zestsolutions.pro"
                className="text-zest hover:text-zest-hover transition-colors"
              >
                demo@zestsolutions.pro
              </a>
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="#"
                  className="text-zinc-500 hover:text-zest transition-colors"
                  aria-label="Social Link"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Intelligent POS',
                'Costing Manager',
                'Inventory Health',
                'API Documentation',
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Case Studies', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">
            (c) {new Date().getFullYear()} Zest Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-dark-secondary border border-border">
            <div className="w-2 h-2 rounded-full bg-zest animate-pulse" />
            <span className="text-xs font-medium text-zinc-300">Deployed on GitHub Pages</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

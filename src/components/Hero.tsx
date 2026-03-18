import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid animate-grid-fade pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-hero-glow opacity-60 pointer-events-none" />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-zest/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zest-light/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="relative inline-flex p-[1px] rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--zest)_360deg)] animate-gradient-rotate" />
              <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-primary text-zest text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-zest animate-pulse" />
                Zest Suite 2.0 is now live
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.1]"
          >
            Scaling Smarter.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zest-light to-zest bg-text-gradient-animate">
              Operating Faster.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Empower your business with our modern management systems and bespoke
            software solutions. Built for speed, precision, and scale.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 text-base font-semibold bg-zest text-black rounded-lg hover:bg-zest-hover transition-colors shadow-[0_0_20px_rgba(20,184,166,0.25)] flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quotation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-dark-secondary text-white border border-border rounded-lg transition-colors flex items-center justify-center"
            >
              Explore The Suite
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

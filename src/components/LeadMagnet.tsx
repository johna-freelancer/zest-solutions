import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export function LeadMagnet() {
  return (
    <section
      id="audit"
      className="py-24 bg-dark-secondary relative border-y border-border overflow-hidden"
    >
      <motion.div
        animate={{
          x: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-zest/5 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-dark-tertiary border border-border rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-80px',
              }}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <div className="relative inline-flex p-[1px] rounded-full overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--zest)_360deg)] animate-gradient-rotate" />
                  <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-primary text-zest text-sm font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    No Commitment Required
                  </div>
                </div>
              </motion.div>

              <motion.h2
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Get a Free System Audit
              </motion.h2>

              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="text-zinc-400 text-lg mb-8 max-w-xl"
              >
                Struggling with legacy software or disjointed tools? Let our
                engineering team analyze your current stack and provide a
                comprehensive modernization roadmap.
              </motion.p>

              <ul className="space-y-4">
                {[
                  'Architecture review',
                  'Performance bottleneck analysis',
                  'Security vulnerability check',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -10,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-zest" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="relative w-full lg:w-[440px]"
          >
            <div className="absolute -inset-0.5 bg-zest/20 rounded-2xl blur-md animate-pulse-glow" />
            <div className="relative bg-dark-primary border border-border rounded-2xl p-6 md:p-8 shadow-2xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-secondary border border-border rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zest focus:ring-1 focus:ring-zest focus:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-secondary border border-border rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zest focus:ring-1 focus:ring-zest focus:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-1.5">
                    Company Website
                  </label>
                  <input
                    type="url"
                    id="company"
                    className="w-full bg-dark-secondary border border-border rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zest focus:ring-1 focus:ring-zest focus:shadow-[0_0_15px_rgba(20,184,166,0.15)] transition-all"
                    placeholder="https://company.com"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden w-full mt-4 px-4 py-3.5 text-sm font-bold bg-zest text-black rounded-lg hover:bg-zest-hover transition-colors flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Audit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </motion.button>

                <p className="text-xs text-zinc-500 text-center mt-4">We respect your privacy. No spam, ever.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

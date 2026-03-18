import { motion } from 'framer-motion'
import { ShoppingCart, PieChart, Activity, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: ShoppingCart,
    title: 'Intelligent POS',
    description:
      'Lightning-fast point of sale system designed for modern retail and hospitality. Works offline and syncs instantly.',
    color: 'from-sky-500/20 to-transparent',
    iconColor: 'text-sky-400',
  },
  {
    icon: PieChart,
    title: 'Precision Costing Manager',
    description:
      'Track recipe margins down to the cent. Automatically update costs based on supplier invoices and market fluctuations.',
    color: 'from-zest/20 to-transparent',
    iconColor: 'text-zest',
  },
  {
    icon: Activity,
    title: 'Inventory Health',
    description:
      'Predictive alerts for low stock, expiring goods, and dead inventory. Never miss a sale or waste product again.',
    color: 'from-cyan-500/20 to-transparent',
    iconColor: 'text-cyan-400',
  },
]

export function ProductGrid() {
  return (
    <section id="suite" className="py-24 bg-dark-secondary relative border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Zest Suite</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A cohesive ecosystem of tools designed to give you complete visibility and
            control over your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              className="group relative rounded-2xl p-[1px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--zest)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate" />
              <div className="relative h-full bg-dark-tertiary rounded-2xl p-8 border border-border group-hover:border-transparent transition-colors flex flex-col">
                <div
                  className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${feature.color} opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="relative z-10 flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.1 + 0.2,
                    }}
                    className="w-12 h-12 rounded-lg bg-dark-primary border border-border flex items-center justify-center mb-6 group-hover:border-zest/30 transition-colors"
                  >
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">{feature.description}</p>
                </div>
                <div className="relative z-10 mt-auto flex items-center text-sm font-semibold text-zest group/link cursor-pointer">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

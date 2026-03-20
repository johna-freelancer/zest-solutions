import { motion } from 'framer-motion'
import { Database, Cpu, LayoutTemplate, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'HRIS Systems',
    description:
      'Centralized human resource information systems that streamline employee records, onboarding, leave, and performance workflows.',
    features: ['Employee lifecycle management', 'Leave and attendance tracking', 'Role-based access controls'],
  },
  {
    icon: Cpu,
    title: 'Payroll Systems',
    description:
      'Accurate and compliant payroll platforms tailored to your policies, including tax rules, deductions, and payout automation.',
    features: ['Automated salary computation', 'Tax and statutory compliance', 'Payslip and bank file generation'],
  },
  {
    icon: LayoutTemplate,
    title: 'Bespoke Web Applications',
    description:
      'Tailor-made software solutions built from the ground up to match your exact business requirements and scale.',
    features: ['Laravel & React stack', 'High-performance architecture', 'Cloud-native deployment'],
  },
]

export function ServicesSection() {
  return (
    <section id="custom" className="py-24 bg-dark-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Custom Projects</h2>
            <p className="text-zinc-400 text-lg">
              Beyond our core suite, we engineer bespoke solutions for complex
              industries. If you can define the problem, we can build the solution.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 text-sm font-semibold bg-dark-tertiary text-white border border-border rounded-lg hover:border-zinc-500 transition-colors whitespace-nowrap"
          >
            View Case Studies
          </motion.button>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{ y: -2, borderColor: 'rgba(20, 184, 166, 0.3)' }}
              className="group bg-dark-secondary border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start md:items-center transition-colors duration-300"
            >
              <div className="relative w-16 h-16 rounded-xl bg-dark-tertiary border border-border flex items-center justify-center shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-zest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                <service.icon className="relative z-10 w-8 h-8 text-zest" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-400 mb-4 md:mb-0 max-w-2xl">{service.description}</p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="flex flex-col gap-3 shrink-0 w-full md:w-auto bg-dark-primary p-4 rounded-xl border border-border"
              >
                {service.features.map((feature, fIndex) => (
                  <motion.div
                    key={fIndex}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 10,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: 'spring',
                          stiffness: 100,
                        },
                      },
                    }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-zest" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

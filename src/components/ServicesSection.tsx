import { motion } from 'framer-motion'
import { Database, Cpu, LayoutTemplate, Globe, Sparkles, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'HRIS Systems',
    description:
      'One place to manage your entire workforce — from hiring to resignation. Keep your team organised and your HR team stress-free.',
    features: ['Track staff records and contracts', 'Manage leave and attendance in real time', 'Control who sees what in your business'],
  },
  {
    icon: Cpu,
    title: 'Business Automation',
    description:
      'Stop doing the same tasks over and over. We build smart workflows that run in the background so your team can focus on what matters.',
    features: ['Eliminate repetitive manual work', 'Connect your existing tools together', 'Replace outdated processes with modern ones'],
  },
  {
    icon: LayoutTemplate,
    title: 'Payroll Systems',
    description:
      'Pay your staff accurately and on time, every time. We build payroll systems that handle the numbers so you never have to sweat the details.',
    features: ['Salaries calculated automatically', 'Always compliant with tax rules', 'Payslips generated and ready to send'],
  },
  {
    icon: Globe,
    title: 'Bespoke Web Applications',
    description:
      'Need something that off-the-shelf software can\'t do? We build custom web applications designed exactly around how your business works.',
    features: ['Built specifically for your business', 'Fast, reliable, and easy to use', 'Grows with you as your business scales'],
  },
  {
    icon: Sparkles,
    title: 'AI Automation',
    description:
      'Let AI handle the grunt work. From smart replies to automated reports, we embed AI into your workflows to save hours every week.',
    features: ['Automate repetitive decisions and tasks', 'Get insights from your data instantly', 'AI tools your team will actually use'],
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

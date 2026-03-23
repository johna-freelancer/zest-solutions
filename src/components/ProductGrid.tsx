import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingCart, PieChart, Activity, ArrowRight, X, ChevronLeft, ChevronRight, Award, Tag, Sparkles } from 'lucide-react'

const rawGalleryImages = import.meta.glob('../assets/gallery/zest_suite/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const galleryImagesByFeature = Object.entries(rawGalleryImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .reduce<Record<string, { src: string; alt: string }[]>>((acc, [path, src]) => {
    const parts = path.split('/')
    // subfolder is one level above the filename, e.g. "costing_manager"
    const featureKey = parts[parts.length - 2] ?? 'other'
    const fileName = parts[parts.length - 1] || 'Screenshot'
    if (!acc[featureKey]) acc[featureKey] = []
    acc[featureKey].push({ src, alt: `${featureKey} screenshot ${fileName}` })
    return acc
  }, {})

const features = [
  {
    icon: ShoppingCart,
    title: 'Intelligent POS',
    galleryKey: 'pos',
    description:
      'Lightning-fast point of sale system designed for modern retail and hospitality. Works offline and syncs instantly.',
    color: 'from-sky-500/20 to-transparent',
    iconColor: 'text-sky-400',
  },
  {
    icon: PieChart,
    title: 'Precision Costing Manager',
    galleryKey: 'costing_manager',
    description:
      'Track recipe margins down to the cent. Automatically update costs based on supplier invoices and market fluctuations.',
    color: 'from-zest/20 to-transparent',
    iconColor: 'text-zest',
  },
  {
    icon: Activity,
    title: 'Inventory Health',
    galleryKey: 'inventory_health',
    description:
      'Predictive alerts for low stock, expiring goods, and dead inventory. Never miss a sale or waste product again.',
    color: 'from-cyan-500/20 to-transparent',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Award,
    title: 'Customer Loyalty',
    galleryKey: 'customer_loyalty',
    description:
      'Reward your regulars with points, tiers, and perks. Build lasting relationships that drive repeat visits and higher spend.',
    color: 'from-violet-500/20 to-transparent',
    iconColor: 'text-violet-400',
  },
  {
    icon: Tag,
    title: 'Promo Codes',
    galleryKey: 'promo_codes',
    description:
      'Create, schedule, and track discount campaigns with ease. Apply percentage or fixed-value codes at the POS in seconds.',
    color: 'from-amber-500/20 to-transparent',
    iconColor: 'text-amber-400',
  },
  {
    icon: Sparkles,
    title: 'AI Insights',
    galleryKey: 'ai_insights',
    description:
      'Harness machine learning to surface trends, forecast demand, and get actionable recommendations — all from your own data.',
    color: 'from-pink-500/20 to-transparent',
    iconColor: 'text-pink-400',
  },
]

export function ProductGrid() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeFeatureKey, setActiveFeatureKey] = useState<string | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const currentImages = useMemo(
    () => (activeFeatureKey ? galleryImagesByFeature[activeFeatureKey] ?? [] : []),
    [activeFeatureKey],
  )
  const hasGallery = currentImages.length > 0
  const activeImage = currentImages[activeImageIndex] ?? currentImages[0]

  useEffect(() => {
    if (!isGalleryOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsGalleryOpen(false)
      }

      if (event.key === 'ArrowRight' && hasGallery) {
        setActiveImageIndex((current) => (current + 1) % currentImages.length)
      }

      if (event.key === 'ArrowLeft' && hasGallery) {
        setActiveImageIndex((current) => (current - 1 + currentImages.length) % currentImages.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [hasGallery, isGalleryOpen, currentImages.length])

  const openGallery = (galleryKey: string) => {
    const images = galleryImagesByFeature[galleryKey] ?? []
    if (images.length === 0) return
    setActiveFeatureKey(galleryKey)
    setActiveImageIndex(0)
    setIsGalleryOpen(true)
  }

  const showPrevious = () => {
    setActiveImageIndex((current) => (current - 1 + currentImages.length) % currentImages.length)
  }

  const showNext = () => {
    setActiveImageIndex((current) => (current + 1) % currentImages.length)
  }

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <button
                  type="button"
                  onClick={() => openGallery(feature.galleryKey)}
                  disabled={!galleryImagesByFeature[feature.galleryKey]?.length}
                  className="relative z-10 mt-auto flex items-center text-sm font-semibold text-zest group/link cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isGalleryOpen && activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm p-4 md:p-8"
            >
              <div className="relative max-w-6xl mx-auto h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-zinc-200 text-sm md:text-base">
                    The Zest Suite Gallery
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsGalleryOpen(false)}
                    className="p-2 rounded-md bg-dark-tertiary border border-border text-zinc-200 hover:text-white"
                    aria-label="Close gallery"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative flex-1 min-h-0 flex items-center justify-center rounded-2xl border border-border bg-dark-tertiary/80 overflow-hidden">
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="max-h-full max-w-full object-contain"
                  />

                  {currentImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPrevious}
                        className="absolute left-3 md:left-4 p-2 md:p-3 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        className="absolute right-3 md:right-4 p-2 md:p-3 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
                  {currentImages.map((image, imageIndex) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImageIndex(imageIndex)}
                      className={`rounded-lg overflow-hidden border ${
                        imageIndex === activeImageIndex ? 'border-zest' : 'border-border'
                      }`}
                      aria-label={`Open screenshot ${imageIndex + 1}`}
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-16 md:h-20 object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

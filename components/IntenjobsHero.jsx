"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

/**
 * IntenjobsHero Component
 *
 * This is the main hero section that displays:
 * - Large heading with animated text
 * - Business partner logos
 * - Call-to-action buttons
 *
 * Uses Framer Motion for entrance animations to create a professional appearance
 */
const IntenjobsHero = () => {
  // Array of business partners - Replace with actual logo paths
  const partners = [
    { name: "alorica", logo: "/logos/alorica.png" },
    { name: "concentrix", logo: "/logos/concentrix.png" },
    { name: "foundever", logo: "/logos/foundever.png" },
    { name: "mashup garage", logo: "/logos/mashup-garage.png" },
    { name: "taskus", logo: "/logos/taskus.png" },
    { name: "teleperformance", logo: "/logos/teleperformance.png" },
    { name: "ttec", logo: "/logos/ttec.png" },
  ]

  return (
    <section className="min-h-screen bg-[#0f0f14] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">

        {/* Main Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-[48px] md:text-[72px] xl:text-[96px] leading-[1.1] font-bold mb-6">
            Get Hired <span className="text-lime-bright">112x</span>
            <br />
            <span className="text-lime-bright">Faster</span> and
            <br />
            Skyrocket
            <br />
            <span className="text-lime-bright">Your Career,</span>
            <br />
            Today!
          </h1>

          <p className="text-white/70 mb-8 max-w-3xl text-sm md:text-base">
            Be seen faster on the Philippines most innovative recruitment platform made for BPO, call centre and VA jobs.
          </p>
        </motion.div>

        {/* Business Partners Section */}
        <div className="mb-16">
          <p className="text-white/70 mb-6 text-sm">
            Some of our business partners you can work with!
          </p>

          {/* Business Partners Grid - Responsive layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white/95 rounded-full px-6 py-4 flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              >
                <span className="text-gray-800 font-semibold text-sm capitalize">
                  {partner.name}
                </span>
                {/* Replace with actual logos when available:
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="object-contain"
                /> */}
              </motion.div>
            ))}

            {/* "You?" Partner Card - Special styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: partners.length * 0.1, duration: 0.3 }}
              className="bg-transparent border-2 border-lime-bright rounded-full px-6 py-4 flex items-center justify-center hover:bg-lime-bright/10 transition-colors cursor-pointer"
            >
              <span className="text-lime-bright font-semibold text-sm">
                You?
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntenjobsHero

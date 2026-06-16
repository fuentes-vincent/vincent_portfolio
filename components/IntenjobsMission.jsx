"use client"

import { motion } from "framer-motion"
import Image from "next/image"

/**
 * IntenjobsMission Component
 *
 * Displays the company mission statement with an illustration
 *
 * Layout:
 * - Left side: Rocket/success illustration
 * - Right side: Mission statement text
 *
 * Animation:
 * - Elements slide in from opposite sides when scrolled into view
 * - Creates a professional parallax-like effect
 *
 * Uses:
 * - whileInView for scroll-triggered animations
 * - viewport={{ once: true }} to prevent re-animation
 * - Next.js Image component for optimized image loading
 */
const IntenjobsMission = () => {
  return (
    <section className="bg-[#0f0f14] py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Placeholder for illustration */}
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-lime-bright/10 to-transparent rounded-lg flex items-center justify-center">
              <div className="text-center">
                {/* Replace with actual SVG illustration */}
                <svg
                  className="w-full h-full p-8"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simple rocket illustration placeholder */}
                  <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Rocket body */}
                    <path d="M100 40 L80 120 L120 120 Z" fill="none" />
                    <circle cx="100" cy="70" r="8" fill="white" />
                    {/* Flames */}
                    <path d="M85 120 L80 140 L85 130 L80 150" opacity="0.7" />
                    <path d="M100 120 L100 160" opacity="0.7" />
                    <path d="M115 120 L120 140 L115 130 L120 150" opacity="0.7" />
                    {/* Stars */}
                    <circle cx="50" cy="50" r="3" fill="white" />
                    <circle cx="150" cy="60" r="3" fill="white" />
                    <circle cx="40" cy="100" r="2" fill="white" />
                    <circle cx="160" cy="90" r="2" fill="white" />
                  </g>
                </svg>
                {/* When you have the actual illustration:
                <Image
                  src="/illustrations/rocket-illustration.svg"
                  alt="Mission illustration"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
                */}
              </div>
            </div>
          </motion.div>

          {/* Right side - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Main Mission Statement - Large Quote */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
              &quot;Change{" "}
              <span className="text-lime-bright">1,000,000</span>{" "}
              Filipino &apos;job seekers&apos; title to &apos;employed&apos; by{" "}
              <span className="text-lime-bright">2026</span>&quot;
            </h2>

            {/* Supporting Description */}
            <div className="space-y-4">
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Our mission is to empower 1 million Filipino job seekers to not only change their job
                titles to &apos;Employed&apos;, but also to foster long-term career growth and stability by 2026.
              </p>

              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Inten is an AI-empowered recruitment platform in the Philippines. Our typical clients
                are BPO, RPO, and call center businesses looking for high-quality, Filipino talent, fast.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IntenjobsMission

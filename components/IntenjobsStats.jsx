"use client"

import { useRef } from "react"
import CountUp from "react-countup"
import { useInView } from "framer-motion"

/**
 * IntenjobsStats Component
 *
 * Displays animated statistics counter showing employment numbers
 *
 * Key features:
 * - Uses react-countup for smooth number animation
 * - Triggers animation only when component is in viewport
 * - Custom colored numbers matching the design
 *
 * Benefits:
 * - useInView hook ensures animation plays only when user scrolls to this section
 * - once: true prevents re-animation on every scroll
 * - Improves performance by not running animation when not visible
 */
const IntenjobsStats = () => {
  const ref = useRef(null)
  // isInView returns true when the element is visible in the viewport
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-[#0f0f14] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

          {/* Counter Display */}
          <div className="flex items-baseline gap-2 md:gap-4">
            {/* First part: "0 000" in lime green */}
            <div className="flex items-baseline">
              <span className="text-[80px] md:text-[120px] xl:text-[160px] font-bold text-lime-bright leading-none">
                0
              </span>
              <span className="text-[80px] md:text-[120px] xl:text-[160px] font-bold text-lime-bright leading-none ml-2">
                000
              </span>
            </div>

            {/* Second part: "100" in yellow-green - Animated Counter */}
            <CountUp
              start={isInView ? 0 : null}
              end={100}
              duration={2.5}
              delay={0.5}
              className="text-[80px] md:text-[120px] xl:text-[160px] font-bold text-lime leading-none"
              useEasing={true}
              separator=","
            />
          </div>

          {/* Description Text */}
          <div className="max-w-md">
            <p className="text-white text-2xl md:text-3xl xl:text-4xl font-semibold leading-tight">
              Number of Filipinos employed through Inten
            </p>
          </div>
        </div>

        {/* Full animated number display alternative */}
        {/* Uncomment this if you want the full number to be animated */}
        {/*
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <CountUp
            start={isInView ? 0 : null}
            end={1000100}
            duration={2.5}
            className="text-[80px] md:text-[120px] xl:text-[160px] font-bold leading-none"
            useEasing={true}
            separator=" "
            // Custom render to color different parts
            formattingFn={(value) => {
              const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
              return formatted
            }}
          >
            {({ countUpRef }) => (
              <div className="flex items-baseline gap-4">
                <span ref={countUpRef} className="text-lime-bright" />
              </div>
            )}
          </CountUp>

          <div className="max-w-md">
            <p className="text-white text-2xl md:text-3xl xl:text-4xl font-semibold leading-tight">
              Number of Filipinos employed through Inten
            </p>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

export default IntenjobsStats

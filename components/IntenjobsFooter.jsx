"use client"

import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

/**
 * IntenjobsFooter Component
 *
 * Simple footer with social media links and copyright
 *
 * Features:
 * - Social media icons with hover effects
 * - Responsive layout
 * - Smooth transitions on hover
 *
 * Uses react-icons for consistent icon styling
 */
const IntenjobsFooter = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-[#0f0f14] border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">

          {/* "Follow us on" text */}
          <p className="text-white/60 text-sm">Follow us on</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white/60 hover:text-lime-bright transition-colors duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright Text */}
          <p className="text-white/40 text-sm">
            Inten 2023
          </p>
        </div>
      </div>
    </footer>
  )
}

export default IntenjobsFooter

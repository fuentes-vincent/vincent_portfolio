import IntenjobsHero from "@/components/IntenjobsHero"
import IntenjobsStats from "@/components/IntenjobsStats"
import IntenjobsMission from "@/components/IntenjobsMission"
import IntenjobsFooter from "@/components/IntenjobsFooter"

/**
 * Intenjobs Landing Page
 *
 * This page combines all the Intenjobs components to create a complete landing page
 *
 * Structure:
 * 1. Hero Section - Main headline and business partners
 * 2. Stats Section - Animated employment statistics
 * 3. Mission Section - Company mission with illustration
 * 4. Footer - Social links and copyright
 *
 * All components are client-side rendered for animations
 * The page itself can be server-rendered for better SEO
 */
export const metadata = {
  title: "Intenjobs - Get Hired 112x Faster",
  description: "Be seen faster on the Philippines most innovative recruitment platform made for BPO, call centre and VA jobs.",
}

const IntenjobsPage = () => {
  return (
    <main className="bg-[#0f0f14] min-h-screen">
      {/* Hero Section with headline and partners */}
      <IntenjobsHero />

      {/* Statistics Section with animated counter */}
      <IntenjobsStats />

      {/* Mission Statement Section */}
      <IntenjobsMission />

      {/* Footer with social links */}
      <IntenjobsFooter />
    </main>
  )
}

export default IntenjobsPage

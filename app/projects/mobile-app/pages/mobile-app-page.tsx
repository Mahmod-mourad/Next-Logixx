import MobileAppHero from "../components/mobile-app-hero"
import MobileAppFeatures from "../components/mobile-app-features"
import MobileAppTechnologies from "../components/mobile-app-technologies"

export default function MobileAppPage() {
  return (
    <div className="min-h-screen">
      <MobileAppHero />
      <MobileAppFeatures />
      <MobileAppTechnologies />
    </div>
  )
}

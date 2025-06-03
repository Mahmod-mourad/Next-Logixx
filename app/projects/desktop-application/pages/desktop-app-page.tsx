import DesktopAppHero from "../components/desktop-app-hero"
import DesktopAppFeatures from "../components/desktop-app-features"
import DesktopAppTechnologies from "../components/desktop-app-technologies"

export default function DesktopAppPage() {
  return (
    <div className="min-h-screen">
      <DesktopAppHero />
      <DesktopAppFeatures />
      <DesktopAppTechnologies />
    </div>
  )
}

import CMSHero from "../components/cms-hero"
import CMSFeatures from "../components/cms-features"
import CMSTechnologies from "../components/cms-technologies"

export default function CMSPage() {
  return (
    <div className="min-h-screen">
      <CMSHero />
      <CMSFeatures />
      <CMSTechnologies />
    </div>
  )
}

import EcommerceHero from "../components/ecommerce-hero"
import EcommerceFeatures from "../components/ecommerce-features"
import EcommerceTechnologies from "../components/ecommerce-technologies"

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      <EcommerceHero />
      <EcommerceFeatures />
      <EcommerceTechnologies />
    </div>
  )
}

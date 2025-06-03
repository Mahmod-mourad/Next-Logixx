import EcommerceHero from "./components/ecommerce-hero"
import EcommerceFeatures from "./components/ecommerce-features"
import EcommerceTechnologies from "./components/ecommerce-technologies"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "متجر إلكتروني | Next Logix",
  description: "متجر إلكتروني متكامل مع واجهة مستخدم حديثة وأداء عالي",
}

export default function EcommercePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <EcommerceHero />
        <EcommerceFeatures />
        <EcommerceTechnologies />
      </main>
      <Footer />
    </div>
  )
} 
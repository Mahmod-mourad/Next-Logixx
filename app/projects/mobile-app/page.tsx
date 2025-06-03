import MobileAppHero from "./components/mobile-app-hero"
import MobileAppFeatures from "./components/mobile-app-features"
import MobileAppTechnologies from "./components/mobile-app-technologies"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "تطبيق الجوال | Next Logix",
  description: "تطبيق جوال متكامل مع واجهة مستخدم حديثة وأداء عالي",
}

export default function MobileAppPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <MobileAppHero />
        <MobileAppFeatures />
        <MobileAppTechnologies />
      </main>
      <Footer />
    </div>
  )
} 
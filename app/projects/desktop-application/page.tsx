import DesktopAppHero from "./components/desktop-app-hero"
import DesktopAppFeatures from "./components/desktop-app-features"
import DesktopAppTechnologies from "./components/desktop-app-technologies"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "تطبيق سطح المكتب | Next Logix",
  description: "تطبيق سطح مكتب متكامل مع واجهة مستخدم حديثة وأداء عالي",
}

export default function DesktopAppPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <DesktopAppHero />
        <DesktopAppFeatures />
        <DesktopAppTechnologies />
      </main>
      <Footer />
    </div>
  )
} 
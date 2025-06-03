import WebAppHero from "@/app/projects/components/web-app-hero"
import WebAppFeatures from "@/app/projects/components/web-app-features"
import WebAppTechnologies from "@/app/projects/components/web-app-technologies"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "تطبيق الويب | Next Logix",
  description: "تطبيق ويب متكامل مع واجهة مستخدم حديثة وأداء عالي",
}

export default function WebAppPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <WebAppHero />
        <WebAppFeatures />
        <WebAppTechnologies />
      </main>
      <Footer />
    </div>
  )
} 
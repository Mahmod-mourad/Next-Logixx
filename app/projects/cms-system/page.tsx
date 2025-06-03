import CMSHero from "./components/cms-hero"
import CMSFeatures from "./components/cms-features"
import CMSTechnologies from "./components/cms-technologies"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "نظام إدارة المحتوى | Next Logix",
  description: "نظام إدارة محتوى متكامل مع واجهة مستخدم حديثة وأداء عالي",
}

export default function CMSPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <CMSHero />
        <CMSFeatures />
        <CMSTechnologies />
      </main>
      <Footer />
    </div>
  )
} 
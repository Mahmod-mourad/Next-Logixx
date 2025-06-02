import ELearningHero from "@/app/projects/components/e-learning-hero"
import ELearningFeatures from "@/app/projects/components/e-learning-features"
import ELearningTechnologies from "@/app/projects/components/e-learning-technologies"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "المنصة التعليمية | Next Logix",
  description: "منصة تعليمية متكاملة لتقديم الدورات عبر الإنترنت",
}

export default function ELearningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-grow">
        <ELearningHero />
        <ELearningFeatures />
        <ELearningTechnologies />
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  // Define values for cards to avoid duplication
  const valueCards = [
    {
      id: "reliability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      title: "الموثوقية",
      description: "نلتزم بتقديم حلول آمنة وموثوقة تلبي احتياجات عملائنا",
    },
    {
      id: "innovation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="m4.93 4.93 2.83 2.83" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="m4.93 19.07 2.83-2.83" />
          <path d="m16.24 7.76 2.83-2.83" />
        </svg>
      ),
      title: "الابتكار",
      description: "نسعى دائمًا لتقديم حلول مبتكرة باستخدام أحدث التقنيات",
    },
    {
      id: "team",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "فريق متكامل",
      description: "فريق متكامل من المهندسين ذوي الخبرة في مختلف مجالات البرمجة والتسويق الرقمي",
    },
  ]

  // Define featured projects
  const featuredProjects = [
    {
      id: "accounting-software",
      title: "فوترة",
      description: "برنامج محاسبي متكامل لإدارة الحسابات والمخزون والفواتير للشركات والمؤسسات",
      image: "/assets/images/projects/accounting-software.jpg",
      category: "software",
      featured: true,
    },
    {
      id: "e-learning-platform",
      title: "منصة تعليمية",
      description: "منصة تعليمية متكاملة لتقديم الدورات عبر الإنترنت",
      image: "/assets/images/projects/e-learning.jpg",
      category: "web",
      featured: true,
    },
    {
      id: "cms-system",
      title: "نظام إدارة المحتوى",
      description: "نظام إدارة محتوى مخصص لشركة إعلامية",
      image: "/assets/images/projects/cms.jpg",
      category: "web",
      featured: true,
    },
  ]

  // Define services
  const services = [
    {
      id: "web-dev",
      title: "تطوير تطبيقات الويب",
      description: "تصميم وتطوير مواقع وتطبيقات ويب متكاملة باستخدام أحدث التقنيات",
      icon: "globe",
    },
    {
      id: "digital-marketing",
      title: "التسويق الرقمي",
      description: "خدمات تسويق رقمي متكاملة لزيادة ظهور علامتك التجارية وجذب العملاء",
      icon: "megaphone",
    },
    {
      id: "accounting-software",
      title: "برامج المحاسبة",
      description: "تطوير برامج محاسبية متكاملة باستخدام لغة C# لإدارة الحسابات والمخزون",
      icon: "calculator",
    },
  ]

  return (
    <div className={`flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition`} dir="rtl">
      {/* Header */}
      <MainNav />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center pt-20 bg-blue-900">
            <div className="absolute inset-0 bg-blue-900"></div>
            {/* يمكن إضافة تأثيرات خلفية إضافية هنا إذا رغبت */}

            <div className="container relative z-10 px-2 sm:px-4">
              <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
                {/* Hero Content */}
                <div className="text-center lg:text-right">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 break-words">
                    نُمهد الطريق <span className="text-[#00e6d8]">لنجاح الشركات الناشئة</span>
                  </h1>
                  <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-blue-100 mb-8 break-words">
                    خدماتنا مصممة لمساعدتك على النمو والابتكار والتميز في السوق الرقمي.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end gap-4">
                    <Button
                      size="lg"
                      className="bg-[#00e6d8] hover:bg-[#00bfae] text-blue-900 font-bold rounded-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md transition-all w-full sm:w-auto"
                      asChild
                    >
                      <Link href="/contact">احجز استشارة مجانية</Link>
                    </Button>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                  <div className="relative w-60 h-60 sm:w-80 sm:h-80 max-w-full">
                    <Image
                      src="/rocket-hero.svg"
                      alt="Rocket Launch Illustration"
                      width={320}
                      height={320}
                      className="object-contain drop-shadow-2xl w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects - ثانياً */}
          <section className="bg-slate-100 py-20 dark:bg-slate-900 theme-transition">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl">
                  أبرز مشاريعنا
                </h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">
                  نماذج من المشاريع التي قمنا بتنفيذها لعملائنا في مختلف المجالات
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={`featured-project-${project.id}`}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    category={project.category}
                    featured={project.featured}
                  />
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-slate-200 dark:border-slate-700 theme-transition" asChild>
                  <Link href="/projects">عرض جميع المشاريع</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section - ثالثاً */}
          <section id="services" className="py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl">
                  خدماتنا
                </h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">
                  نقدم مجموعة متنوعة من الخدمات البرمجية لتلبية احتياجات عملائنا
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard
                    key={`home-service-${service.id}`}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300"
                  asChild
                >
                  <Link href="/services">عرض جميع الخدمات</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Value Proposition Section - رابعاً */}
          <section className="bg-blue-900 py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  قيمنا
                </h2>
                <p className="mt-4 text-blue-100">
                  نؤمن بمجموعة من القيم التي توجه عملنا وتفاعلاتنا مع عملائنا
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {valueCards.map((card) => (
                  <Card key={`value-card-${card.id}`} className="bg-white text-slate-900 shadow-lg">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <div className="h-12 w-12 text-blue-600 mb-4">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-slate-700">{card.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action - خامساً */}
          <section className="py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl">
                  هل أنت جاهز لنقل مشروعك إلى المستوى التالي؟
                </h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">
                  تواصل معنا اليوم لمناقشة احتياجاتك وكيف يمكننا مساعدتك في تحقيق أهدافك.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-md transition-all w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contact">احجز استشارة مجانية</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
    </div>
  )
}

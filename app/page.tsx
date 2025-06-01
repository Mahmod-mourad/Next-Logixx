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
import HeroSlider from "@/components/HeroSlider"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import styles from '@/components/HomeSlider.module.css';

export default function Home() {
  // Define values for cards to avoid duplication
  const valueCards = [
    {
      id: "reliability",
      icon: (
        <svg
          xmlns="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
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
          xmlns="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
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
          xmlns="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
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

  // Define slider content (repeating the desired hero content 4 times)
  const sliderItems = [
    {
      id: 1,
      title: "نُمهد الطريق لنجاح الشركات الناشئة",
      description: "خدماتنا مصممة لمساعدتك على النمو والابتكار والتميز في السوق الرقمي.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      ctaText: "احجز استشارة مجانية",
      ctaLink: "/contact",
    },
    {
      id: 2,
      title: "نُمهد الطريق لنجاح الشركات الناشئة",
      description: "خدماتنا مصممة لمساعدتك على النمو والابتكار والتميز في السوق الرقمي.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      ctaText: "احجز استشارة مجانية",
      ctaLink: "/contact",
    },
    {
      id: 3,
      title: "نُمهد الطريق لنجاح الشركات الناشئة",
      description: "خدماتنا مصممة لمساعدتك على النمو والابتكار والتميز في السوق الرقمي.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      ctaText: "احجز استشارة مجانية",
      ctaLink: "/contact",
    },
    {
      id: 4,
      title: "نُمهد الطريق لنجاح الشركات الناشئة",
      description: "خدماتنا مصممة لمساعدتك على النمو والابتكار والتميز في السوق الرقمي.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
      ctaText: "احجز استشارة مجانية",
      ctaLink: "/contact",
    },
  ];

  return (
    <div className={`flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-white theme-transition`} dir="rtl">
      {/* Header */}
      <MainNav />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSlider />

          {/* Featured Projects - ثانياً */}
          <section className="bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 py-20 theme-transition">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
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
                <Button 
                  variant="outline" 
                  className="border-slate-200 dark:border-slate-700 theme-transition hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
                  asChild
                >
                  <Link href="/projects">عرض جميع المشاريع</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section - ثالثاً */}
          <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
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
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/services">عرض جميع الخدمات</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Value Proposition Section - رابعاً */}
          <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20">
            <div className="container">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  قيمنا
                </h2>
                <p className="mt-4 text-blue-100">
                  نؤمن بمجموعة من القيم التي توجه عملنا وتفاعلاتنا مع عملائنا
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {valueCards.map((card) => (
                  <Card key={`value-card-${card.id}`} className="bg-white/10 backdrop-blur-sm text-white border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <div className="h-12 w-12 text-cyan-300 mb-4">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-blue-100">{card.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action - خامساً */}
          <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  هل أنت جاهز لنقل مشروعك إلى المستوى التالي؟
                </h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">
                  تواصل معنا اليوم لمناقشة احتياجاتك وكيف يمكننا مساعدتك في تحقيق أهدافك.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
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

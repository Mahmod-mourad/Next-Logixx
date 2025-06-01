"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  ctaSecondary?: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "نُمهد الطريق لنجاح الشركات الناشئة",
    subtitle: "حلول برمجية مبتكرة",
    description: "خدماتنا مصممة لمساعدتك على النمو والابتكار والتميز في السوق الرقمي.",
    image: "/modern-tech-office.png",
    cta: "احجز استشارة مجانية",
    ctaSecondary: "تعرف على خدماتنا",
  },
  {
    id: 2,
    title: "تطوير تطبيقات الويب المتقدمة",
    subtitle: "تقنيات حديثة",
    description: "نستخدم أحدث التقنيات لبناء تطبيقات ويب سريعة وآمنة تلبي احتياجات عملك.",
    image: "/seo-optimization-concept.png",
    cta: "ابدأ مشروعك",
    ctaSecondary: "شاهد أعمالنا",
  },
  {
    id: 3,
    title: "تطبيقات الهاتف المحمول",
    subtitle: "تجربة مستخدم مميزة",
    description: "نصمم ونطور تطبيقات الهاتف المحمول التي تقدم تجربة استخدام استثنائية لعملائك.",
    image: "/ui-ux-principles.png",
    cta: "طلب عرض سعر",
    ctaSecondary: "تواصل معنا",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div 
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[5000ms] ease-linear"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: isHovering ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-600/70 backdrop-blur-[2px]" />
          </div>
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl" dir="rtl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ease-out ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  display: index === currentSlide ? "block" : "none",
                }}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-cyan-300 text-lg font-medium tracking-wide uppercase animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                      {slide.title}
                    </h1>
                  </div>

                  <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed animate-slide-up delay-200">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up delay-300">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-600 hover:to-cyan-500 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                    </Button>
                    {slide.ctaSecondary && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-xl dark:bg-slate-800/50 dark:hover:bg-slate-700/50 dark:border-slate-400/50 dark:hover:border-slate-300"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        {slide.ctaSecondary}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-0">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125 shadow-lg shadow-white/50" 
                  : "bg-white/50 hover:bg-white/75 hover:scale-110"
              }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isAutoPlaying ? <div className="h-4 w-4 bg-white rounded-sm" /> : <Play className="h-4 w-4 text-white" />}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
} 
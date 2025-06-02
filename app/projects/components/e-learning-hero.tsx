import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ELearningHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <GraduationCap className="w-4 h-4 ml-2" />
              منصة التعلم الإلكتروني
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">مرحباً بكم في المنصة التعليمية</h1>
            <p className="text-xl mb-8 opacity-90">
              منصة تعليمية متكاملة تقدم تجربة تعليمية فريدة من نوعها. نوفر مجموعة واسعة من الدورات والمواد التعليمية
              التفاعلية لمساعدة الطلاب على تحقيق أهدافهم التعليمية.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm opacity-80">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">دورة تدريبية</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">96%</div>
                <div className="text-sm opacity-80">معدل الرضا</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
                <Link href="/quote">طلب عرض سعر</Link>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white transition-all duration-200 shadow-lg hover:shadow-xl" 
                asChild
              >
                <Link href="#features">استكشف المميزات</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/virtual-classroom.png"
                alt="منصة التعليم الإلكتروني"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
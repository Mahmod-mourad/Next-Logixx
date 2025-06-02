import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, BookOpen, Award } from "lucide-react"

export default function ELearningHero() {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-800 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <GraduationCap className="w-4 h-4 ml-2" />
              منصة التعلم الإلكتروني
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">منصة التعلم الإلكتروني الذكية</h1>
            <p className="text-xl mb-8 opacity-90">
              منصة تعليمية متطورة تجمع بين التقنيات الحديثة وتجربة المستخدم المتميزة لتوفير بيئة تعليمية تفاعلية وشاملة
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
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-slate-100">
                جرب المنصة مجاناً
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-32 bg-white/20 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-white/20 rounded flex-1"></div>
                  <div className="h-8 bg-white/20 rounded flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

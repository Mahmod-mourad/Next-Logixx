import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Download, Star, Users } from "lucide-react"

export default function MobileAppHero() {
  return (
    <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-800 dark:to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Smartphone className="w-4 h-4 ml-2" />
              تطبيق جوال
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تطبيق جوال ذكي متعدد المنصات</h1>
            <p className="text-xl mb-8 opacity-90">
              تطبيق جوال متطور يعمل على أنظمة iOS و Android بأداء عالي وتجربة مستخدم سلسة ومتميزة
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Download className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">500K+</div>
                <div className="text-sm opacity-80">تحميل</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm opacity-80">تقييم</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm opacity-80">استخدام يومي</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-slate-100">
                تحميل التطبيق
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 max-w-sm mx-auto">
              <div className="bg-white/20 rounded-2xl p-4 space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-white/40 rounded-full"></div>
                </div>
                <div className="h-6 bg-white/20 rounded w-3/4 mx-auto"></div>
                <div className="h-32 bg-white/20 rounded-xl"></div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-12 bg-white/20 rounded-lg"></div>
                  <div className="h-12 bg-white/20 rounded-lg"></div>
                  <div className="h-12 bg-white/20 rounded-lg"></div>
                  <div className="h-12 bg-white/20 rounded-lg"></div>
                </div>
                <div className="h-8 bg-white/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

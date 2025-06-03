import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Building2, BarChart3, Shield } from "lucide-react"
import Image from "next/image"

export default function DesktopAppHero() {
  return (
    <div className="relative bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Monitor className="w-4 h-4 ml-2" />
              تطبيق سطح المكتب
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تطبيق سطح المكتب المتقدم</h1>
            <p className="text-xl mb-8 opacity-90">
              تطبيق سطح مكتب قوي ومتطور يوفر أداءً عالياً وواجهة مستخدم احترافية للمهام المعقدة
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm opacity-80">شركة</div>
              </div>
              <div className="text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm opacity-80">سجل يومياً</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">99.5%</div>
                <div className="text-sm opacity-80">دقة البيانات</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-slate-700 hover:bg-slate-100">
                تحميل التطبيق
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-slate-700 hover:bg-slate-50 border-2 border-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-tech-office.png"
                alt="تطبيق سطح المكتب"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function AccountingHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-[url('/assets/images/projects/accounting-software.jpg')] opacity-10 bg-cover bg-center"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Calculator className="w-4 h-4 ml-2" />
              نظام محاسبة متكامل
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              نظام محاسبة متكامل وعصري
            </h1>
            <p className="text-xl mb-8 opacity-90">
              نظام محاسبة قوي ومتطور يوفر حلولاً متكاملة لإدارة الشؤون المالية
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm opacity-80">مستخدم نشط</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <Zap className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm opacity-80">تقييم المستخدمين</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <Shield className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">حماية البيانات</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300">
                طلب عرض سعر
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 border-2 border-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Image
                src="/assets/images/projects/accounting-software.jpg"
                alt="نظام المحاسبة"
                width={600}
                height={300}
                className="w-full h-[300px] object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
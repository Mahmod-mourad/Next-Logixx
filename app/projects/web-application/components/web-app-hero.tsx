import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function WebAppHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Globe className="w-4 h-4 ml-2" />
              تطبيق الويب
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تطبيق ويب متكامل وعصري</h1>
            <p className="text-xl mb-8 opacity-90">
              تطبيق ويب قوي ومتطور يوفر تجربة مستخدم متميزة وأداء عالي
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-80">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-80">وقت التشغيل</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">حماية البيانات</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                طلب عرض سعر
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 border-2 border-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/web-app-dashboard.png"
                alt="تطبيق الويب"
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
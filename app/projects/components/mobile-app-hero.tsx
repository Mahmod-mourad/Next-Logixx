import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function MobileAppHero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-700 dark:to-purple-900 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Smartphone className="w-4 h-4 ml-2" />
              تطبيق الجوال
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تطبيق جوال متكامل وعصري</h1>
            <p className="text-xl mb-8 opacity-90">
              تطبيق جوال قوي ومتطور يوفر تجربة مستخدم متميزة وأداء عالي
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-80">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm opacity-80">تقييم المستخدمين</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">حماية البيانات</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-purple-50">
                طلب عرض سعر
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-purple-50 border-2 border-white transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/mobile-app-screens.png"
                alt="تطبيق الجوال"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
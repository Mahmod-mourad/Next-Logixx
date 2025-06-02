import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, TrendingUp, CreditCard, Truck } from "lucide-react"

export default function EcommerceHero() {
  return (
    <div className="relative bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-800 dark:to-pink-800 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <ShoppingCart className="w-4 h-4 ml-2" />
              متجر إلكتروني
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">متجر إلكتروني متكامل</h1>
            <p className="text-xl mb-8 opacity-90">
              منصة تجارة إلكترونية شاملة تجمع بين التصميم العصري والوظائف المتقدمة لتوفير تجربة تسوق استثنائية
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-80">منتج</div>
              </div>
              <div className="text-center">
                <CreditCard className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">25K+</div>
                <div className="text-sm opacity-80">طلب شهرياً</div>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">3.8%</div>
                <div className="text-sm opacity-80">معدل التحويل</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-slate-100">
                ابدأ متجرك الآن
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-white/20 rounded w-1/3"></div>
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/20 rounded"></div>
                  <div className="h-24 bg-white/20 rounded"></div>
                </div>
                <div className="h-4 bg-white/20 rounded w-2/3"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-10 bg-white/30 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, FileText, Settings, Users } from "lucide-react"

export default function CMSHero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Database className="w-4 h-4 ml-2" />
              نظام إدارة المحتوى
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">نظام إدارة المحتوى المتطور</h1>
            <p className="text-xl mb-8 opacity-90">
              نظام إدارة محتوى قوي ومرن يوفر تحكماً كاملاً في المحتوى الرقمي مع واجهة إدارة سهلة ومتقدمة
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">موقع إلكتروني</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm opacity-80">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <Settings className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-80">وقت التشغيل</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-slate-100">
                جرب النظام مجاناً
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                مشاهدة العرض التوضيحي
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-32 bg-white/20 rounded"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-white/20 rounded"></div>
                  <div className="h-16 bg-white/20 rounded"></div>
                  <div className="h-16 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

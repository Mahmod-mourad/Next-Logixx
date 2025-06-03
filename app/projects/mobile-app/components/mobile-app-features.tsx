import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Smartphone, 
  Bell, 
  Shield, 
  Zap, 
  Users, 
  Settings,
  Clock,
  Globe,
  BarChart3 
} from "lucide-react"

const features = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "واجهة مستخدم متطورة",
    description: "تصميم عصري وسهل الاستخدام مع دعم كامل للغة العربية",
    color: "bg-blue-500",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "إشعارات فورية",
    description: "نظام إشعارات متكامل مع خيارات تخصيص متقدمة",
    color: "bg-blue-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "أمان متقدم",
    description: "حماية شاملة للبيانات مع نظام صلاحيات متطور",
    color: "bg-blue-700",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "أداء عالي",
    description: "سرعة فائقة في معالجة البيانات وتنفيذ العمليات",
    color: "bg-blue-800",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "دعم متعدد المستخدمين",
    description: "إدارة صلاحيات متقدمة للمستخدمين والمجموعات",
    color: "bg-blue-900",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "تخصيص كامل",
    description: "خيارات متقدمة لتخصيص الواجهة والإعدادات",
    color: "bg-blue-950",
  },
]

export default function MobileAppFeatures() {
  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <Clock className="w-4 h-4 ml-2 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400">الميزات الرئيسية</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">مميزات التطبيق</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من المميزات لضمان تجربة مستخدم متميزة وأداء عالي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <div
                  className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-blue-900 dark:text-blue-100">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">500,000+</div>
                <div className="text-sm opacity-80">تحميل</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <Bell className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-sm opacity-80">تقييم</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <Globe className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm opacity-80">استخدام يومي</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <Shield className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-80">معدل الاحتفاظ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Settings,
  Clock,
  BarChart3 
} from "lucide-react"

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "واجهة مستخدم متطورة",
    description: "تصميم عصري وسهل الاستخدام مع دعم كامل للغة العربية",
    color: "bg-blue-500",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "إدارة البيانات",
    description: "نظام متكامل لإدارة وتخزين البيانات مع دعم النسخ الاحتياطي",
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

export default function WebAppFeatures() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Clock className="w-4 h-4 ml-2" />
            الميزات الرئيسية
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">مميزات التطبيق</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من المميزات لضمان تجربة مستخدم متميزة وأداء عالي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div
                  className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white mb-4`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 
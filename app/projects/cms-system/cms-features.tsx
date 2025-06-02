import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit3, Users, ImageIcon, Calendar, Search, MessageCircle, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: <Edit3 className="w-6 h-6" />,
    title: "محرر محتوى متقدم",
    description: "محرر WYSIWYG قوي مع دعم كامل للوسائط المتعددة والتنسيق المتقدم",
    color: "bg-blue-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "إدارة المستخدمين",
    description: "نظام صلاحيات متقدم مع أدوار مخصصة وإدارة شاملة للمستخدمين",
    color: "bg-green-500",
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "إدارة الوسائط",
    description: "مكتبة وسائط متطورة مع تحسين تلقائي للصور ودعم جميع الصيغ",
    color: "bg-purple-500",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "جدولة النشر",
    description: "نظام جدولة ذكي للمحتوى مع إمكانية النشر التلقائي في أوقات محددة",
    color: "bg-orange-500",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "تحسين SEO",
    description: "أدوات متقدمة لتحسين محركات البحث مع تحليل شامل للكلمات المفتاحية",
    color: "bg-red-500",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "نظام التعليقات",
    description: "إدارة متقدمة للتعليقات مع فلترة تلقائية ونظام مراجعة",
    color: "bg-teal-500",
  },
]

export default function CMSFeatures() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <BarChart3 className="w-4 h-4 ml-2" />
            الميزات الأساسية
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">أدوات شاملة لإدارة المحتوى</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة متكاملة من الأدوات المتقدمة لإنشاء وإدارة ونشر المحتوى بكفاءة عالية
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

        <div className="mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">موقع محمي</div>
              </div>
              <div>
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm opacity-80">مستخدم نشط</div>
              </div>
              <div>
                <Edit3 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm opacity-80">مقال منشور</div>
              </div>
              <div>
                <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-80">وقت التشغيل</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

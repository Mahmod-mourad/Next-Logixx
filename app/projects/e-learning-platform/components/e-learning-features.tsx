import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, MessageSquare, BarChart3, Shield, Smartphone, Globe, Clock, Users } from "lucide-react"

const features = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "فصول افتراضية متقدمة",
    description: "بث مباشر عالي الجودة مع إمكانية التفاعل المباشر والمشاركة",
    color: "bg-blue-500",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "منتدى نقاش تفاعلي",
    description: "مساحة للطلاب والمدرسين للتفاعل وتبادل الأفكار والخبرات",
    color: "bg-green-500",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "تحليلات مفصلة",
    description: "تتبع تقدم الطلاب وإحصائيات شاملة عن الأداء والمشاركة",
    color: "bg-purple-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "أمان متقدم",
    description: "حماية البيانات والمحتوى مع نظام صلاحيات متطور",
    color: "bg-red-500",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "تطبيق جوال",
    description: "تطبيق مصاحب للهواتف الذكية للتعلم في أي وقت ومكان",
    color: "bg-orange-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "دعم متعدد اللغات",
    description: "واجهة متعددة اللغات لخدمة جمهور أوسع من المتعلمين",
    color: "bg-teal-500",
  },
]

export default function ELearningFeatures() {
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Clock className="w-4 h-4 ml-2" />
            الميزات الرئيسية
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">كل ما تحتاجه لتجربة تعليمية متميزة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مجموعة شاملة من الأدوات والميزات المتقدمة لضمان تجربة تعليمية فعالة ومثمرة
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm opacity-80">طالب ومعلم</div>
              </div>
              <div>
                <Video className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">دورة تدريبية</div>
              </div>
              <div>
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">50,000+</div>
                <div className="text-sm opacity-80">ساعة تعليمية</div>
              </div>
              <div>
                <BarChart3 className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-80">معدل الإكمال</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Wrench } from "lucide-react"

const technologies = {
  frontend: [
    { name: "React.js", description: "مكتبة JavaScript لبناء واجهات المستخدم التفاعلية" },
    { name: "Next.js", description: "إطار عمل React للتطبيقات الحديثة" },
    { name: "TypeScript", description: "JavaScript مع أنواع البيانات الثابتة" },
    { name: "Tailwind CSS", description: "إطار عمل CSS للتصميم السريع" },
  ],
  backend: [
    { name: "Node.js", description: "بيئة تشغيل JavaScript على الخادم" },
    { name: "Express.js", description: "إطار عمل ويب سريع ومرن" },
    { name: "Socket.io", description: "مكتبة للاتصال المباشر في الوقت الفعلي" },
    { name: "JWT", description: "نظام مصادقة آمن ومرن" },
  ],
  database: [
    { name: "MongoDB", description: "قاعدة بيانات NoSQL مرنة وقابلة للتوسع" },
    { name: "Redis", description: "قاعدة بيانات في الذاكرة للتخزين المؤقت" },
    { name: "Elasticsearch", description: "محرك بحث وتحليل متقدم" },
  ],
  tools: [
    { name: "AWS S3", description: "خدمة تخزين سحابية آمنة" },
    { name: "CloudFront", description: "شبكة توزيع المحتوى العالمية" },
    { name: "Docker", description: "منصة للحاويات والنشر" },
    { name: "Stripe API", description: "نظام دفع آمن ومتقدم" },
  ],
}

export default function ELearningTechnologies() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Code className="w-4 h-4 ml-2" />
            التقنيات المستخدمة
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">تقنيات حديثة وموثوقة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نستخدم أحدث التقنيات والأدوات لضمان أداء عالي وتجربة مستخدم متميزة
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">مكدس التقنيات</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="frontend" className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  الواجهة الأمامية
                </TabsTrigger>
                <TabsTrigger value="backend" className="flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  الخادم
                </TabsTrigger>
                <TabsTrigger value="database" className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  قواعد البيانات
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  الأدوات
                </TabsTrigger>
              </TabsList>

              {Object.entries(technologies).map(([category, techs]) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {techs.map((tech, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-foreground mb-2">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">أداء عالي</h3>
              <p className="text-muted-foreground">تحميل سريع وتجربة سلسة للمستخدمين</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">قابلية التوسع</h3>
              <p className="text-muted-foreground">يدعم آلاف المستخدمين المتزامنين</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">أمان متقدم</h3>
              <p className="text-muted-foreground">حماية شاملة للبيانات والمحتوى</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

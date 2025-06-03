import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Wrench } from "lucide-react"

const technologies = {
  frontend: [
    { name: "React Native", description: "إطار عمل لبناء تطبيقات الجوال" },
    { name: "TypeScript", description: "JavaScript مع أنواع البيانات الثابتة" },
    { name: "Redux", description: "إدارة حالة التطبيق" },
    { name: "React Navigation", description: "إدارة التنقل بين الشاشات" },
  ],
  backend: [
    { name: "Node.js", description: "بيئة تشغيل JavaScript على الخادم" },
    { name: "Express.js", description: "إطار عمل ويب سريع ومرن" },
    { name: "Socket.io", description: "اتصال ثنائي الاتجاه في الوقت الفعلي" },
    { name: "JWT", description: "نظام مصادقة آمن ومرن" },
  ],
  database: [
    { name: "MongoDB", description: "قاعدة بيانات NoSQL مرنة" },
    { name: "Firebase", description: "منصة تطوير متكاملة" },
    { name: "Redis", description: "قاعدة بيانات في الذاكرة للتخزين المؤقت" },
  ],
  tools: [
    { name: "Expo", description: "منصة تطوير تطبيقات الجوال" },
    { name: "Git", description: "نظام تحكم بالإصدارات" },
    { name: "CI/CD", description: "تكامل ونشر مستمر" },
    { name: "AWS", description: "خدمات سحابية متكاملة" },
  ],
}

export default function MobileAppTechnologies() {
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
      </div>
    </div>
  )
} 
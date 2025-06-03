import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Wrench } from "lucide-react"

const technologies = {
  frontend: [
    { name: "React", description: "مكتبة JavaScript لبناء واجهات المستخدم" },
    { name: "Next.js", description: "إطار عمل React للواجهة الأمامية" },
    { name: "TypeScript", description: "JavaScript مع أنواع البيانات الثابتة" },
    { name: "Tailwind CSS", description: "إطار عمل CSS للتصميم السريع" },
  ],
  backend: [
    { name: "Node.js", description: "بيئة تشغيل JavaScript على الخادم" },
    { name: "Express.js", description: "إطار عمل ويب سريع ومرن" },
    { name: "REST API", description: "واجهة برمجة تطبيقات RESTful" },
    { name: "JWT", description: "نظام مصادقة آمن ومرن" },
  ],
  database: [
    { name: "MongoDB", description: "قاعدة بيانات NoSQL مرنة" },
    { name: "Redis", description: "قاعدة بيانات في الذاكرة للتخزين المؤقت" },
    { name: "Elasticsearch", description: "محرك بحث قوي للمنتجات" },
  ],
  tools: [
    { name: "Git", description: "نظام تحكم بالإصدارات" },
    { name: "Docker", description: "حاويات لتسهيل النشر" },
    { name: "CI/CD", description: "تكامل ونشر مستمر" },
    { name: "AWS", description: "خدمات سحابية متكاملة" },
  ],
}

export default function EcommerceTechnologies() {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-blue-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <Code className="w-4 h-4 ml-2 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400">التقنيات المستخدمة</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">تقنيات حديثة وموثوقة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نستخدم أحدث التقنيات والأدوات لضمان أداء عالي وتجربة مستخدم متميزة
          </p>
        </div>

        <Card className="border-0 shadow-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-blue-900 dark:text-blue-100">مكدس التقنيات</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-blue-50 dark:bg-blue-950 p-1 rounded-lg">
                <TabsTrigger value="frontend" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Code className="w-4 h-4" />
                  الواجهة الأمامية
                </TabsTrigger>
                <TabsTrigger value="backend" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Server className="w-4 h-4" />
                  الخادم
                </TabsTrigger>
                <TabsTrigger value="database" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Database className="w-4 h-4" />
                  قواعد البيانات
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Wrench className="w-4 h-4" />
                  الأدوات
                </TabsTrigger>
              </TabsList>

              {Object.entries(technologies).map(([category, techs]) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {techs.map((tech, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-white/50 dark:bg-slate-800/50 hover:shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{tech.name}</h4>
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

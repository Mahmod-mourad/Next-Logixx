import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Wrench } from "lucide-react"

const technologies = {
  frontend: [
    { name: "Electron", description: "إطار عمل لبناء تطبيقات سطح المكتب" },
    { name: "React", description: "مكتبة JavaScript لبناء واجهات المستخدم" },
    { name: "TypeScript", description: "JavaScript مع أنواع البيانات الثابتة" },
    { name: "Tailwind CSS", description: "إطار عمل CSS للتصميم السريع" },
  ],
  backend: [
    { name: ".NET", description: "إطار عمل متكامل لتطوير تطبيقات سطح المكتب" },
    { name: "C#", description: "لغة برمجة قوية ومرنة" },
    { name: "Entity Framework", description: "إطار عمل للتعامل مع قواعد البيانات" },
    { name: "WPF", description: "إطار عمل لبناء واجهات المستخدم" },
  ],
  database: [
    { name: "SQLite", description: "قاعدة بيانات خفيفة ومدمجة" },
    { name: "PostgreSQL", description: "قاعدة بيانات علائقية متقدمة" },
    { name: "Redis", description: "قاعدة بيانات في الذاكرة للتخزين المؤقت" },
  ],
  tools: [
    { name: "Electron Builder", description: "أداة بناء تطبيقات سطح المكتب" },
    { name: "Git", description: "نظام تحكم بالإصدارات" },
    { name: "CI/CD", description: "تكامل ونشر مستمر" },
    { name: "Docker", description: "حاويات لتسهيل النشر والتوزيع" },
  ],
}

export default function DesktopAppTechnologies() {
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

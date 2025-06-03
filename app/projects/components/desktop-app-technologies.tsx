import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Wrench } from "lucide-react"

const technologies = {
  frontend: [
    { name: "Electron", description: "إطار عمل لبناء تطبيقات سطح المكتب باستخدام تقنيات الويب" },
    { name: "React", description: "مكتبة JavaScript لبناء واجهات المستخدم التفاعلية" },
    { name: "TypeScript", description: "JavaScript مع أنواع البيانات الثابتة" },
    { name: "Tailwind CSS", description: "إطار عمل CSS للتصميم السريع" },
  ],
  backend: [
    { name: "Node.js", description: "بيئة تشغيل JavaScript على الخادم" },
    { name: "Express.js", description: "إطار عمل ويب سريع ومرن" },
    { name: "WebSocket", description: "اتصال ثنائي الاتجاه في الوقت الفعلي" },
    { name: "JWT", description: "نظام مصادقة آمن ومرن" },
  ],
  database: [
    { name: "SQLite", description: "قاعدة بيانات خفيفة ومدمجة" },
    { name: "PostgreSQL", description: "قاعدة بيانات علائقية قوية" },
    { name: "Redis", description: "قاعدة بيانات في الذاكرة للتخزين المؤقت" },
  ],
  tools: [
    { name: "Electron Builder", description: "أداة لبناء وتوزيع التطبيقات" },
    { name: "Auto Update", description: "نظام تحديث تلقائي للتطبيق" },
    { name: "Docker", description: "منصة للحاويات والنشر" },
    { name: "Git", description: "نظام تحكم بالإصدارات" },
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

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">أداء عالي</h3>
              <p className="text-muted-foreground">تحميل سريع وتجربة سلسة للمستخدمين</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-slate-600 dark:text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">قابلية التوسع</h3>
              <p className="text-muted-foreground">يدعم آلاف المستخدمين المتزامنين</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-slate-600 dark:text-slate-400" />
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
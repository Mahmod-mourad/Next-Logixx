import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import { ServiceCard } from "@/components/service-card"
import Link from "next/link"

export const metadata = {
  title: "خدماتنا | Next Logix",
  description: "تعرف على الخدمات التي تقدمها شركة Next Logix",
}

export default function ServicesPage() {
  // Define tech list to avoid duplication
  const techList = [
    "React.js",
    "Next.js",
    "Node.js",
    "ASP.NET Core",
    "C#",
    "SQL Server",
    "MongoDB",
    "Firebase",
    "TypeScript",
    "Tailwind CSS",
    "Material UI",
    "Redux",
    "GraphQL",
    "Express.js",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "REST API",
    "WebSocket",
    "Jest",
    "Cypress"
  ]

  // Define process steps to avoid duplication
  const processSteps = [
    {
      step: "01",
      title: "التحليل",
      description: "دراسة متطلبات المشروع وتحليل احتياجات العميل",
    },
    {
      step: "02",
      title: "التخطيط",
      description: "وضع خطة عمل واضحة وتحديد الموارد اللازمة",
    },
    {
      step: "03",
      title: "التنفيذ",
      description: "تنفيذ المشروع وفق الخطة الموضوعة وبأعلى معايير الجودة",
    },
    {
      step: "04",
      title: "المتابعة",
      description: "متابعة المشروع بعد التسليم وتقديم الدعم الفني المستمر",
    },
  ]

  // Define company values
  const companyValues = [
    {
      title: "الجودة",
      description: "نلتزم بتقديم منتجات وخدمات عالية الجودة تتجاوز توقعات عملائنا. نحن نؤمن بأن الجودة ليست خيارًا، بل هي ضرورة.",
      icon: "award"
    },
    {
      title: "العمل الجماعي",
      description: "نؤمن بقوة العمل الجماعي والتعاون. نحن نعمل معًا كفريق واحد لتحقيق أهدافنا المشتركة وتقديم أفضل النتائج لعملائنا.",
      icon: "users"
    },
    {
      title: "الابتكار",
      description: "نسعى دائمًا للابتكار وتطوير حلول جديدة ومبتكرة. نحن نشجع الإبداع والتفكير خارج الصندوق في كل ما نقوم به.",
      icon: "lightbulb"
    },
    {
      title: "الموثوقية",
      description: "نلتزم بالوفاء بوعودنا وتقديم خدمات موثوقة لعملائنا. نحن نحرص على بناء علاقات طويلة الأمد قائمة على الثقة والشفافية.",
      icon: "shield-check"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 theme-transition">
      <MainNav />

      <PageHeader
        title="خدماتنا"
        description="تعرف على الخدمات التي تقدمها شركة Next Logix"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "خدماتنا", href: "/services" },
        ]}
      />

      <PageTransition>
        <main className="flex-1">
          {/* Services Grid */}
          <section className="py-16 border-b border-slate-200 dark:border-slate-800">
            <div className="container">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  title="تطوير تطبيقات الويب"
                  description="تصميم وتطوير مواقع وتطبيقات ويب متكاملة باستخدام أحدث التقنيات"
                  icon="globe"
                />
                <ServiceCard
                  title="تطوير تطبيقات سطح المكتب"
                  description="تطوير برامج سطح المكتب متكاملة باستخدام أحدث التقنيات والأدوات"
                  icon="calculator"
                />
                <ServiceCard
                  title="تطوير تطبيقات الموبايل"
                  description="تطوير تطبيقات موبايل متكاملة لنظامي Android و iOS"
                  icon="smartphone"
                />
                <ServiceCard
                  title="تطوير واجهات المستخدم"
                  description="تصميم واجهات مستخدم جذابة وسهلة الاستخدام"
                  icon="layout"
                />
                <ServiceCard
                  title="تطوير واجهات برمجة التطبيقات"
                  description="تطوير واجهات برمجة تطبيقات RESTful و GraphQL"
                  icon="server"
                />
                <ServiceCard
                  title="استشارات تقنية"
                  description="تقديم استشارات تقنية متخصصة في مجال تطوير البرمجيات"
                  icon="tool"
                />
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 border-b border-slate-200 dark:border-slate-800">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">منهجية العمل</h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">نتبع منهجية عمل واضحة ومنظمة لضمان تقديم أفضل النتائج لعملائنا</p>
              </div>
              <div className="mt-16">
                <div className="grid gap-4 grid-cols-2">
                  {processSteps.map((item, index) => (
                    <div key={`process-step-${index}`} className="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-xl font-bold text-white theme-transition">
                          {item.step}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white theme-transition">{item.title}</h3>
                        <p className="text-slate-700 dark:text-slate-300 theme-transition">{item.description}</p>
                      </div>
                      {index < 2 && (
                        <div className="absolute left-0 top-8 hidden w-full border-t-2 border-dashed border-slate-300 dark:border-slate-700 md:block theme-transition"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="py-16 border-b border-slate-200 dark:border-slate-800">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">التقنيات التي نستخدمها</h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">نستخدم أحدث التقنيات والأدوات لتقديم حلول متطورة وفعالة لعملائنا</p>
              </div>
              <div className="mt-16 grid gap-4 grid-cols-3">
                {techList.map((tech, index) => (
                  <div
                    key={`tech-item-${index}`}
                    className="flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-center font-medium text-slate-900 dark:text-white theme-transition hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300 text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Values */}
          <section className="py-16 border-b border-slate-200 dark:border-slate-800">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white theme-transition">قيمنا</h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 theme-transition">المبادئ التي توجه عملنا وتحدد هويتنا كشركة</p>
              </div>
              <div className="mt-16">
                <div className="grid gap-4 grid-cols-2">
                  {companyValues.map((value, index) => (
                    <div key={`value-${index}`} className="relative p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-xl font-bold text-white theme-transition">
                          <i className={`material-icons text-3xl`}>{value.icon}</i>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white theme-transition">{value.title}</h3>
                        <p className="text-slate-700 dark:text-slate-300 theme-transition">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="container">
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 shadow-xl">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
                    هل أنت جاهز لتطوير أعمالك؟
                  </h2>
                  <p className="mt-2 text-base text-blue-100 mb-6">
                    تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية. فريقنا جاهز لمساعدتك في تحقيق
                    أهدافك.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 dark:bg-white dark:text-blue-900 dark:hover:bg-blue-50 theme-transition" asChild>
                      <Link href="/contact">تواصل معنا</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300 dark:bg-blue-900/30 dark:text-blue-100 dark:border-blue-800 dark:hover:bg-blue-900/50 theme-transition"
                      asChild
                    >
                      <Link href="/projects">عرض مشاريعنا</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>

      <Footer />
      <WhatsAppButton phoneNumber="01020384694" />
    </div>
  )
}

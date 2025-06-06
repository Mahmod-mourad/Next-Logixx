"use client"

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AccountingSoftwareProjectPage() {
  const features = [
    {
      id: "login",
      title: "نظام تسجيل دخول آمن",
      description: "نظام تسجيل دخول متقدم مع إمكانية إدارة الصلاحيات والمستخدمين بشكل آمن وفعال",
      image: "/assets/images/accounting-software/login.png",
      benefits: [
        "تسجيل دخول آمن ومشفر",
        "إدارة صلاحيات المستخدمين",
        "تعدد المستخدمين",
        "حماية البيانات الحساسة"
      ]
    },
    {
      id: "customers",
      title: "إدارة العملاء",
      description: "نظام متكامل لإدارة العملاء مع إمكانية تتبع المعاملات والمدفوعات",
      image: "/assets/images/accounting-software/customers.png",
      benefits: [
        "إدارة بيانات العملاء",
        "تتبع المعاملات",
        "سجل المدفوعات",
        "تقارير العملاء"
      ]
    },
    {
      id: "sales",
      title: "إدارة المبيعات",
      description: "نظام متطور لإدارة المبيعات والفواتير مع إمكانية تتبع المخزون",
      image: "/assets/images/accounting-software/sales.png",
      benefits: [
        "إدارة الفواتير",
        "تتبع المبيعات",
        "إدارة المخزون",
        "تقارير المبيعات"
      ]
    },
    {
      id: "bank",
      title: "إدارة الحسابات البنكية",
      description: "نظام متكامل لإدارة الحسابات البنكية والمعاملات المالية",
      image: "/assets/images/accounting-software/bank.png",
      benefits: [
        "إدارة الحسابات البنكية",
        "تتبع المعاملات المالية",
        "المصالحات البنكية",
        "تقارير مالية"
      ]
    },
    {
      id: "reports",
      title: "التقارير المالية",
      description: "تقارير مالية شاملة ومفصلة مع إمكانية تخصيص التقارير حسب احتياجاتك",
      image: "/assets/images/accounting-software/reborts.png",
      benefits: [
        "تقارير مالية شاملة",
        "تقارير مخصصة",
        "تحليلات مالية",
        "تصدير التقارير"
      ]
    },
    {
      id: "backup",
      title: "النسخ الاحتياطي",
      description: "نظام نسخ احتياطي متقدم مع إمكانية استعادة البيانات بسهولة",
      image: "/assets/images/accounting-software/backup,restorre.png",
      benefits: [
        "نسخ احتياطي تلقائي",
        "استعادة البيانات",
        "حماية البيانات",
        "تخزين آمن"
      ]
    },
    {
      id: "mortgage",
      title: "إدارة القروض والرهون",
      description: "نظام متكامل لإدارة القروض والرهون العقارية مع تتبع المدفوعات",
      image: "/assets/images/accounting-software/mortg33tmange].png",
      benefits: [
        "إدارة القروض",
        "تتبع المدفوعات",
        "جدولة الأقساط",
        "تقارير القروض"
      ]
    },
    {
      id: "settings",
      title: "إعدادات النظام",
      description: "لوحة تحكم متكاملة لإدارة إعدادات النظام وتخصيصه حسب احتياجاتك",
      image: "/assets/images/accounting-software/setting.png",
      benefits: [
        "تخصيص النظام",
        "إدارة الإعدادات",
        "تحديث النظام",
        "إدارة المستخدمين"
      ]
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-50 theme-transition">
      <MainNav />

      <PageHeader
        title="برنامج المحاسبة المتكامل"
        description="نظام محاسبة متكامل لإدارة أعمالك بكفاءة عالية"
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "المشاريع", href: "/projects" },
          { title: "برنامج المحاسبة", href: "/projects/accounting-software" },
        ]}
      />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 theme-transition">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl theme-transition">
                    برنامج محاسبة متكامل لإدارة أعمالك
                  </h1>
                  <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 theme-transition">
                    نظام محاسبة متطور يساعدك في إدارة أعمالك بكفاءة عالية. يوفر لك جميع الأدوات التي تحتاجها لإدارة المبيعات، العملاء، المخزون، والحسابات المالية.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                      asChild
                    >
                      <Link href="#free-trial">تحميل نسخة مجانية</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                      asChild
                    >
                      <Link href="#features">استكشف المميزات</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/images/accounting-software/login.png"
                    alt="برنامج المحاسبة المتكامل"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 theme-transition">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl theme-transition">
                  مميزات البرنامج
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 theme-transition">
                  اكتشف كيف يمكن لبرنامجنا مساعدتك في إدارة أعمالك بكفاءة عالية
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <Card
                    key={feature.id}
                    className="bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 theme-transition">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 theme-transition">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-slate-600 dark:text-slate-300 theme-transition">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 ml-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Free Trial Section */}
          <section id="free-trial" className="py-16 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 theme-transition">
            <div className="container">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl theme-transition">
                    جرب النسخة المجانية
                  </h2>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 theme-transition">
                    قم بتحميل النسخة التجريبية المجانية من برنامج المحاسبة المتكامل واكتشف مميزاته بنفسك
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center text-slate-600 dark:text-slate-300 theme-transition">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 ml-2" />
                      نسخة تجريبية كاملة لمدة 30 يوم
                    </li>
                    <li className="flex items-center text-slate-600 dark:text-slate-300 theme-transition">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 ml-2" />
                      جميع المميزات متاحة للتجربة
                    </li>
                    <li className="flex items-center text-slate-600 dark:text-slate-300 theme-transition">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 ml-2" />
                      دعم فني مجاني خلال فترة التجربة
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8">
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const data = {
                      fullName: formData.get('fullName'),
                      email: formData.get('email'),
                      phone: formData.get('phone'),
                      companyName: formData.get('companyName')
                    }

                    fetch('/api/send-download-email', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                      if (data.success) {
                        window.open('https://drive.google.com/file/d/1lB9Cq2vX9Mi0PN2WFdUUC-Wv_ZTRO1wG/view?ts=682e1a9e', '_blank')
                        window.close()
                      }
                    })
                    .catch(error => {
                      console.error('Error:', error)
                    })
                  }}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          الاسم الكامل
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                          placeholder="أدخل بريدك الإلكتروني"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                          placeholder="أدخل رقم هاتفك"
                        />
                      </div>
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          اسم الشركة
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                          placeholder="أدخل اسم شركتك (اختياري)"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        تحميل النسخة المجانية
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 theme-transition">
            <div className="container">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-700 dark:via-blue-800 dark:to-blue-900 p-8 md:p-12 shadow-xl theme-transition">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">هل أنت جاهز لبدء استخدام البرنامج؟</h2>
                  <p className="mt-4 text-lg text-blue-100">
                    تواصل معنا اليوم للحصول على عرض سعر مخصص وبدء استخدام البرنامج في أقرب وقت ممكن
                  </p>
                  <p className="mt-2 text-lg text-blue-100">
                    العنوان: 6 أكتوبر - المحور المركزي
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button
                      size="lg"
                      className="bg-white/90 hover:bg-white text-blue-900 dark:bg-white/90 dark:text-blue-900 dark:hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
                      asChild
                    >
                      <Link href="/quote">طلب عرض سعر</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-blue-100/90 text-blue-900 border-blue-200 hover:bg-blue-200/90 dark:bg-blue-900/30 dark:text-blue-100 dark:border-blue-800 dark:hover:bg-blue-900/50 shadow-md hover:shadow-lg transition-all duration-200"
                      asChild
                    >
                      <Link href="/contact">اتصل بنا</Link>
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

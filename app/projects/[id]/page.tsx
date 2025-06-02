import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"
import { notFound } from "next/navigation"
import fs from 'fs'
import path from 'path'

// Function to get project data from its folder
async function getProjectData(id: string) {
  try {
    const projectPath = path.join(process.cwd(), 'app/projects', id)
    const pagePath = path.join(projectPath, 'page.tsx')
    
    // Check if project folder and page exist
    if (!fs.existsSync(projectPath) || !fs.existsSync(pagePath)) {
      return null
    }

    // Read the project's page.tsx file
    const pageContent = fs.readFileSync(pagePath, 'utf-8')
    
    // Extract metadata using regex
    const titleMatch = pageContent.match(/title:\s*"([^"]+)"/)
    const descriptionMatch = pageContent.match(/description:\s*"([^"]+)"/)
    
    if (!titleMatch || !descriptionMatch) {
      return null
    }

    return {
      title: titleMatch[1],
      description: descriptionMatch[1],
      // You can add more data extraction here as needed
    }
  } catch (error) {
    console.error('Error reading project data:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = await getProjectData(params.id)
  
  if (!project) {
    return {
      title: "404 - الصفحة غير موجودة | Next Logix",
      description: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها."
    }
  }

  return {
    title: `${project.title} | Next Logix`,
    description: project.description
  }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProjectData(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 theme-transition">
      <MainNav />

      <PageHeader
        title={project.title}
        description={project.description}
        breadcrumbs={[
          { title: "الرئيسية", href: "/" },
          { title: "مشاريعنا", href: "/projects" },
          { title: project.title, href: `/projects/${params.id}` },
        ]}
      />

      <PageTransition>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl theme-transition">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 theme-transition">
                  {project.description}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                    asChild
                  >
                    <Link href="/quote">طلب عرض سعر</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    asChild
                  >
                    <Link href="#features">استكشف المميزات</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  مميزات {project.title}
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  نقدم مجموعة متكاملة من المميزات لضمان تجربة مستخدم فعالة وممتعة
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Features will be loaded from the project's page component */}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16">
            <div className="container">
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-8 md:p-12 shadow-xl theme-transition">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    هل أنت جاهز لبدء مشروعك؟
                  </h2>
                  <p className="mt-4 text-lg text-blue-100">
                    تواصل معنا اليوم للحصول على عرض سعر مخصص وبدء مشروعك في أقرب وقت ممكن
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
    </div>
  )
} 
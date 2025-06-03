import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { PageTransition } from "@/components/page-transition"
import Link from "next/link"
import { notFound } from "next/navigation"
import fs from 'fs'
import path from 'path'

// Import project pages
import ELearningPage from "../e-learning-platform/page"
import DesktopAppPage from "../desktop-application/page"
import EcommercePage from "../ecommerce-website/page"
import CMSPage from "../cms-system/page"
// Add imports for other project pages here as you create them

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

// Define metadata based on project ID
export async function generateMetadata({ params }: { params: { id: string } }) {
  const projectId = params.id;

  let title = "Next Logix";
  let description = "";

  switch (projectId) {
    case 'e-learning-platform':
      title = "منصة التعلم الإلكتروني | Next Logix";
      description = "منصة تعليمية متكاملة تقدم تجربة تعليمية فريدة من نوعها.";
      break;
    case 'desktop-application':
      title = "تطبيق سطح المكتب | Next Logix";
      description = "تطبيق سطح مكتب قوي ومتطور يوفر حلولاً متكاملة لإدارة المهام.";
      break;
    case 'ecommerce-website':
      title = "المتجر الإلكتروني | Next Logix";
      description = "منصة تسوق إلكتروني متكاملة توفر تجربة تسوق متميزة وآمنة.";
      break;
    case 'cms-system':
      title = "نظام إدارة المحتوى | Next Logix";
      description = "نظام إدارة محتوى قوي ومتطور يوفر تجربة مستخدم متميزة.";
      break;
    // Add cases for other projects here
    default:
      title = "404 - الصفحة غير موجودة | Next Logix";
      description = "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.";
      break;
  }

  return {
    title,
    description,
  };
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id

  switch (projectId) {
    case 'e-learning-platform':
      return <ELearningPage />
    case 'desktop-application':
      return <DesktopAppPage />
    case 'ecommerce-website':
      return <EcommercePage />
    case 'cms-system':
      return <CMSPage />
    // Add cases for other projects here
    default:
      notFound()
  }
} 
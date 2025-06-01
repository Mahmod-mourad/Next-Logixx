import {
  Globe,
  Layout,
  MessageCircle,
  Server,
  Smartphone,
  PenToolIcon as Tool,
  Calculator,
  Search,
  GraduationCap,
  Megaphone,
  Share2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "globe":
        return <Globe className="h-6 w-6" />
      case "smartphone":
        return <Smartphone className="h-6 w-6" />
      case "layout":
        return <Layout className="h-6 w-6" />
      case "server":
        return <Server className="h-6 w-6" />
      case "message-circle":
        return <MessageCircle className="h-6 w-6" />
      case "tool":
        return <Tool className="h-6 w-6" />
      case "calculator":
        return <Calculator className="h-6 w-6" />
      case "search":
        return <Search className="h-6 w-6" />
      case "graduation-cap":
        return <GraduationCap className="h-6 w-6" />
      case "megaphone":
        return <Megaphone className="h-6 w-6" />
      case "share2":
        return <Share2 className="h-6 w-6" />
      default:
        return <Globe className="h-6 w-6" />
    }
  }

  return (
    <Card className="group relative overflow-hidden bg-white border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800 dark:border-slate-700 theme-transition">
      <CardContent className="relative p-6">
        <div className="mb-4 h-12 w-12 rounded-lg bg-blue-100 p-3 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400 theme-transition">
          {getIcon()}
        </div>
        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white theme-transition group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 theme-transition">{description}</p>
      </CardContent>
    </Card>
  )
}

import type React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

interface CourseProps {
  course: {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    duration: string
    level: string
  }
}

export default function CourseCard({ course }: CourseProps) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg  ">
      <CardHeader className="pb-4">
        <div className="mb-4">{course.icon}</div>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <span className="text-slate-500">Duration</span>
            <span className="font-medium">{course.duration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-500">Level</span>
            <span className="font-medium">{course.level}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={"/courses"} className="w-full " >
        <Button variant="ghost" className="w-full justify-between group">
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

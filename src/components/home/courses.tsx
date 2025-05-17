import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Code, Cpu, Database, Monitor, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import CourseCard from "./course-card"

  const courses = [
    {
      id: 1,
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts including data science and web development.",
      icon: <Code className="h-10 w-10 text-primary" />,
      duration: "6 months",
      level: "Beginner to Intermediate",
    },
    {
      id: 2,
      title: "Tally",
      description: "Master Tally for accounting, inventory management, and GST compliance.",
      icon: <Database className="h-10 w-10 text-primary" />,
      duration: "3 months",
      level: "Beginner to Intermediate",
    },
    {
      id: 3,
      title: "Java Development",
      description: "Comprehensive Java training covering core concepts, OOP, and enterprise applications.",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      duration: "6 months",
      level: "Beginner to Intermediate",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites.",
      icon: <Monitor className="h-10 w-10 text-primary" />,
      duration: "6 months",
      level: "Beginner to Intermediate",
    },
    {
      id: 5,
      title: "MS Office Package",
      description: "Master Microsoft Office applications including Word, Excel, PowerPoint and Access.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      duration: "3 months",
      level: "Beginner to Advanced",
    },
    {
      id: 6,
      title: "ADCA",
      description: "ADCA course designed to cover core concepts and tools relevant to the field of basic.",
    "category": "basic",
      icon: <Users className="h-10 w-10 text-primary" />,
      duration: "1 year",
      level: "Beginner to Advance",
    },
  ]


export const Courses = () => {
  return (
      <section className="py-20 bg-slate-50" id="courses">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Professional Courses</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Discover our industry-relevant courses designed to help you master in-demand skills and advance your
              career.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Link to={'/courses'} >
              <Button size="lg" variant="outline" className="group">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
  )
}

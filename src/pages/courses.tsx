"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Clock, Users, BarChart, CheckCircle, Download, ArrowRight, ListFilter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { COURSES_CATOGORIES, COURSES_DATA } from "@/lib/data"
import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  const filteredCourses =
    selectedCategory === "all" ? COURSES_DATA : COURSES_DATA.filter((course) => course.category === selectedCategory)

  const searchedCourses = filteredCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-300/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Professional Courses
              </span>
            </h1>
            <p className="mb-8 text-lg text-slate-700 md:text-xl">
              Discover a wide range of industry-relevant courses designed to help you master in-demand skills and
              advance your career in technology.
            </p>

            <div className="mx-auto flex max-w-xl flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="relative flex-grow bg-white rounded-xl ">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">Find Courses</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-10 laptop:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            
            
            {/* FILTER Sidebar */}
            <div className="hidden laptop:block lg:col-span-1">
              <motion.div
                className="sticky top-24 rounded-xl bg-white p-6 shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Categories</h3>
                  <div className="space-y-2">
                    {COURSES_CATOGORIES.map((category) => (
                      <button
                        key={category.id}
                        className={`w-full rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Duration</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="short" className="h-4 w-4 rounded border-slate-300" />
                      <label htmlFor="short" className="ml-2 text-sm text-slate-700">
                        Short (3-4 months)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="medium" className="h-4 w-4 rounded border-slate-300" />
                      <label htmlFor="medium" className="ml-2 text-sm text-slate-700">
                        Medium (6 months)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="long" className="h-4 w-4 rounded border-slate-300" />
                      <label htmlFor="long" className="ml-2 text-sm text-slate-700">
                        Long (1 year)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="mb-4 text-lg font-bold text-slate-900">Level</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="beginner" className="h-4 w-4 rounded border-slate-300" />
                      <label htmlFor="beginner" className="ml-2 text-sm text-slate-700">
                        Beginner
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="intermediate" className="h-4 w-4 rounded border-slate-300" />
                      <label htmlFor="intermediate" className="ml-2 text-sm text-slate-700">
                        Intermediate
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="advanced" className="h-4 w-4 rounded border-slate-300" />
                      <label htmlFor="advanced" className="ml-2 text-sm text-slate-700">
                        Advanced
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                  <Filter className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
              </motion.div>
            </div>

            {/* Course Listings */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  {searchedCourses.length} {searchedCourses.length === 1 ? "Course" : "Courses"} Available
                </h2>
                <Sheet>
                  <SheetTrigger asChild>
                    <ListFilter size={20} />
                  </SheetTrigger>
                  <SheetContent>
                    {/* BODY */}
                    <div className="mb-6">
                      <h3 className="mb-4 text-lg font-bold text-slate-900">Categories</h3>
                      <div className="space-y-2">
                        {COURSES_CATOGORIES.map((category) => (
                          <button
                            key={category.id}
                            className={`w-full rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
                              selectedCategory === category.id
                                ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                                : "text-slate-700 hover:bg-slate-100"
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="mb-4 text-lg font-bold text-slate-900">Duration</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="short" className="h-4 w-4 rounded border-slate-300" />
                          <label htmlFor="short" className="ml-2 text-sm text-slate-700">
                            Short (3-4 months)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="medium" className="h-4 w-4 rounded border-slate-300" />
                          <label htmlFor="medium" className="ml-2 text-sm text-slate-700">
                            Medium (6 months)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="long" className="h-4 w-4 rounded border-slate-300" />
                          <label htmlFor="long" className="ml-2 text-sm text-slate-700">
                            Long (1 year)
                          </label>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {searchedCourses.length === 0 ? (
                <div className="rounded-xl bg-white p-8 text-center shadow-md">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">No courses found</h3>
                  <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {searchedCourses.map((course, indexD) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: indexD * 0.1 }}
                    >
                      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <div className="grid md:grid-cols-3">
                          <div className="md:col-span-1">
                            <img
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              className="h-full w-full object-cover"
                              style={{ maxHeight: "250px" }}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <Badge className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700">
                                  {COURSES_CATOGORIES.find((cat) => cat.id === course.category)?.name}
                                </Badge>
                                <div className="flex items-center">
                                  <span className="text-yellow-500">★★★★★</span>
                                  <span className="ml-1 text-sm font-medium">{course.rating}</span>
                                </div>
                              </div>
                              <CardTitle className="mt-2 text-2xl">{course.title}</CardTitle>
                              <CardDescription>{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              
                              <div className="grid grid-cols-2 laptop:grid-cols-3 gap-4">
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-5 w-5 text-teal-600" />
                                  <span className="text-sm">{course.duration}</span>
                                </div>
                                <div className="flex items-center">
                                  <BarChart className="mr-2 h-5 w-5 text-teal-600" />
                                  <span className="text-sm">{course.level}</span>
                                </div>
                                <div className="flex items-center">
                                  <Users className="mr-2 h-5 w-5 text-teal-600" />
                                  <span className="text-sm">{course.students} students</span>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                              <Link onClick={()=>setIndex(course.id-1)} to={"courseDetails"} spy={true} smooth={true} offset={-150} duration={500} >
                                <Button variant="outline">View Details</Button>
                              </Link>
                              
                              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                                Enroll Now
                              </Button>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id={"courseDetails"}
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Featured Course</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              Take a closer look at our most popular course and discover why thousands of students have chosen it to
              advance their careers.
            </p>
          </motion.div>

          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">

                  <div className="h-[300px] " ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <Badge className="mb-2 bg-teal-600 text-white hover:bg-teal-700">Most Popular</Badge>
                    <h3 className="text-3xl font-bold text-white">{COURSES_DATA[index].title}</h3>
                    <p className="text-teal-50">{COURSES_DATA[index].description}</p>
                  </div>
                </div>

                <div className="p-3 mt-6 laptop:mt-0 laptop:p-6">
                  <Tabs defaultValue="overview">
                    <TabsList className="mb-6 grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                      <TabsTrigger value="instructor">Instructor</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                      <div className="grid gap-8 md:grid-cols-3">
                        <div className="cols-apn-1 laptop:col-span-2">
                          <h4 className="mb-4 text-xl font-bold text-slate-900">Course Description</h4>
                          <p className="mb-6 text-slate-600">{COURSES_DATA[index].description}</p>

                          <h4 className="mb-4 text-xl font-bold text-slate-900">What You'll Learn</h4>
                          <ul className="mb-6 space-y-2">
                            {COURSES_DATA[index].features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-teal-600" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="mb-4 text-xl font-bold text-slate-900">Career Opportunities</h4>
                          <div className="mb-6 flex flex-wrap gap-2">
                            {COURSES_DATA[index].career.map((career, index) => (
                              <Badge key={index} variant="outline" className="bg-slate-100">
                                {career}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="w-full " >
                          <div className="rounded-xl bg-slate-100 p-6 w-full  ">
                            <h4 className="mb-4 text-xl font-bold text-slate-900">Course Details</h4>
                            <ul className="space-y-4">
                              <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                                <span className="text-slate-600">Duration</span>
                                <span className="font-medium">{COURSES_DATA[index].duration}</span>
                              </li>
                              <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                                <span className="text-slate-600">Level</span>
                                <span className="font-medium">{COURSES_DATA[index].level}</span>
                              </li>
                              <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                                <span className="text-slate-600">Students</span>
                                <span className="font-medium">{COURSES_DATA[index].students}</span>
                              </li>
                              <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                                <span className="text-slate-600">Language</span>
                                <span className="font-medium">English</span>
                              </li>
                              <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                                <span className="text-slate-600">Certificate</span>
                                <span className="font-medium">Yes</span>
                              </li>
                            </ul>

                            <div className="mt-6">
                              <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                                Enroll Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="curriculum">
                      <h4 className="mb-6 text-xl font-bold text-slate-900">Course Curriculum</h4>
                      <Accordion type="single" collapsible className="w-full">
                        {COURSES_DATA[index].curriculum.map((module, index) => (
                          <AccordionItem key={index} value={`module-${index}`}>
                            <AccordionTrigger className="text-left font-medium">{module.module}</AccordionTrigger>
                            <AccordionContent>
                              <ul className="ml-6 space-y-2 pt-2">
                                {module.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex} className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-teal-600" />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabsContent>

                    <TabsContent value="instructor">
                      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
                        <img
                          src="/placeholder.svg?height=200&width=200"
                          alt="Instructor"
                          className="mb-4 h-40 w-40 rounded-full object-cover md:mb-0"
                        />
                        <div>
                          <h4 className="mb-2 text-xl font-bold text-slate-900">Priya Sharma</h4>
                          <p className="mb-2 text-teal-600">Head of Academics & Python Instructor</p>
                          <p className="mb-4 text-slate-600">
                            Masters in Information Technology with 15 years of teaching experience. Specialized in
                            Python and Data Science. Former senior developer at leading tech companies with extensive
                            experience in building real-world applications.
                          </p>
                          <p className="mb-4 text-slate-600">
                            Priya has trained over 2000 students in Python programming and data science, many of whom
                            have gone on to work at top tech companies globally. Her teaching approach focuses on
                            practical, hands-on learning with real-world projects.
                          </p>
                          <div className="flex space-x-4">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button variant="outline" size="sm">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="reviews">
                      <h4 className="mb-6 text-xl font-bold text-slate-900">Student Reviews</h4>
                      <div className="space-y-6">
                        {[1, 2, 3].map((review) => (
                          <div key={review} className="rounded-lg bg-slate-50 p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <div className="flex items-center">
                                <img
                                  src="/placeholder.svg?height=50&width=50"
                                  alt="Student"
                                  className="mr-3 h-10 w-10 rounded-full"
                                />
                                <div>
                                  <h5 className="font-medium">Student Name</h5>
                                  <p className="text-sm text-slate-500">2 months ago</p>
                                </div>
                              </div>
                              <div className="text-yellow-500">★★★★★</div>
                            </div>
                            <p className="text-slate-600">
                              This course exceeded my expectations! The instructor explains complex concepts in a simple
                              way, and the hands-on projects helped me apply what I learned immediately. I landed a job
                              as a Python developer within a month of completing this course.
                            </p>
                          </div>
                        ))}
                        <Button variant="outline" className="w-full">
                          Load More Reviews
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              Find answers to common questions about our courses, enrollment process, and learning experience.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I enroll in a course?</AccordionTrigger>
                <AccordionContent>
                  Enrolling in a course is simple. Browse our course catalog, select the course you're interested in,
                  and click the "Enroll Now" button. You can then complete the registration process by providing your
                  details and making the payment. Alternatively, you can visit our institute in person to enroll.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are there any prerequisites for the courses?</AccordionTrigger>
                <AccordionContent>
                  Prerequisites vary by course. Basic courses typically don't require prior knowledge, while advanced
                  courses may require familiarity with certain concepts. Each course page lists specific prerequisites.
                  If you're unsure, our counselors can help determine the right course level for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer placement assistance?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide comprehensive placement assistance to our students. This includes resume building,
                  interview preparation, and connecting you with our network of hiring partners. Our placement cell
                  actively works to help students find suitable job opportunities after course completion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What is the class schedule like?</AccordionTrigger>
                <AccordionContent>
                  We offer flexible scheduling options to accommodate different needs. Classes are typically held on
                  weekdays and weekends, with morning, afternoon, and evening batches available. You can choose the
                  schedule that works best for you during enrollment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you provide certificates upon course completion?</AccordionTrigger>
                <AccordionContent>
                  Yes, all students receive a course completion certificate after successfully finishing their course
                  and passing the final assessment. For certain courses, we also offer preparation for
                  industry-recognized certifications from companies like Microsoft, Oracle, and Cisco.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  )
}




  // const courses = [
  //   {
  //     id: 1,
  //     title: "Python Programming",
  //     description:
  //       "Comprehensive Python course covering basics to advanced concepts including data science applications.",
  //     category: "programming",
  //     image: "/placeholder.svg?height=200&width=400",
  //     duration: "3 months",
  //     level: "Beginner to Advanced",
  //     students: "1200+",
  //     rating: 4.8,
  //     features: [
  //       "Introduction to Python syntax and programming concepts",
  //       "Data structures and algorithms",
  //       "Object-oriented programming in Python",
  //       "Web development with Django and Flask",
  //       "Data analysis with Pandas and NumPy",
  //       "Machine learning basics with Scikit-learn",
  //     ],
  //     curriculum: [
  //       {
  //         module: "Module 1: Python Fundamentals",
  //         topics: ["Python installation and setup", "Variables and data types", "Control structures", "Functions"],
  //       },
  //       {
  //         module: "Module 2: Data Structures",
  //         topics: ["Lists and tuples", "Dictionaries and sets", "Comprehensions", "Working with files"],
  //       },
  //       {
  //         module: "Module 3: Object-Oriented Programming",
  //         topics: ["Classes and objects", "Inheritance", "Polymorphism", "Encapsulation"],
  //       },
  //       {
  //         module: "Module 4: Advanced Python",
  //         topics: ["Decorators", "Generators", "Context managers", "Multithreading"],
  //       },
  //       {
  //         module: "Module 5: Python for Data Science",
  //         topics: ["NumPy", "Pandas", "Data visualization", "Introduction to machine learning"],
  //       },
  //     ],
  //     career: [
  //       "Python Developer",
  //       "Data Analyst",
  //       "Machine Learning Engineer",
  //       "Backend Developer",
  //       "Automation Engineer",
  //     ],
  //     certification: "Python Certified Professional",
  //   },
  //   {
  //     id: 2,
  //     title: "Tally ERP",
  //     description: "Master Tally for accounting, inventory management, and GST compliance.",
  //     category: "office",
  //     image: "/placeholder.svg?height=200&width=400",
  //     duration: "2 months",
  //     level: "Beginner to Intermediate",
  //     students: "950+",
  //     rating: 4.7,
  //     features: [
  //       "Fundamentals of accounting and financial management",
  //       "Tally ERP installation and configuration",
  //       "Company creation and management",
  //       "Ledger and voucher entries",
  //       "Inventory management and stock valuation",
  //       "GST compliance and tax filing",
  //     ],
  //     curriculum: [
  //       {
  //         module: "Module 1: Introduction to Accounting",
  //         topics: ["Basic accounting principles", "Financial statements", "Accounting cycle", "Tally interface"],
  //       },
  //       {
  //         module: "Module 2: Company Setup",
  //         topics: ["Creating company in Tally", "Configuring settings", "Chart of accounts", "Opening balances"],
  //       },
  //       {
  //         module: "Module 3: Day-to-Day Operations",
  //         topics: ["Voucher entry", "Bank reconciliation", "Inventory management", "Purchase and sales"],
  //       },
  //       {
  //         module: "Module 4: GST and Taxation",
  //         topics: ["GST setup", "Tax calculations", "Filing returns", "Compliance reports"],
  //       },
  //       {
  //         module: "Module 5: Advanced Features",
  //         topics: ["Payroll management", "Cost centers", "Budgeting", "Data security"],
  //       },
  //     ],
  //     career: ["Accountant", "Bookkeeper", "Accounts Executive", "GST Practitioner", "Financial Analyst"],
  //     certification: "Certified Tally Professional",
  //   },
  //   {
  //     id: 3,
  //     title: "Java Development",
  //     description: "Comprehensive Java training covering core concepts, OOP, and enterprise applications.",
  //     category: "programming",
  //     image: "/placeholder.svg?height=200&width=400",
  //     duration: "4 months",
  //     level: "Beginner to Advanced",
  //     students: "1050+",
  //     rating: 4.9,
  //     features: [
  //       "Core Java programming fundamentals",
  //       "Object-oriented programming principles",
  //       "Java collections framework",
  //       "Exception handling and multithreading",
  //       "JDBC for database connectivity",
  //       "Web application development with Servlets and JSP",
  //     ],
  //     curriculum: [
  //       {
  //         module: "Module 1: Java Basics",
  //         topics: ["JDK installation", "Syntax and data types", "Control statements", "Methods and arrays"],
  //       },
  //       {
  //         module: "Module 2: Object-Oriented Programming",
  //         topics: ["Classes and objects", "Inheritance", "Polymorphism", "Abstraction and interfaces"],
  //       },
  //       {
  //         module: "Module 3: Java Advanced",
  //         topics: ["Collections framework", "Exception handling", "Multithreading", "File I/O"],
  //       },
  //       {
  //         module: "Module 4: Database Programming",
  //         topics: ["JDBC architecture", "Connection management", "Prepared statements", "Transaction handling"],
  //       },
  //       {
  //         module: "Module 5: Web Development",
  //         topics: ["Servlets", "JSP", "MVC architecture", "Introduction to Spring framework"],
  //       },
  //     ],
  //     career: [
  //       "Java Developer",
  //       "Software Engineer",
  //       "Backend Developer",
  //       "Full Stack Developer",
  //       "Application Programmer",
  //     ],
  //     certification: "Oracle Certified Java Programmer",
  //   },
  //   {
  //     id: 4,
  //     title: "Web Development",
  //     description: "Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites.",
  //     category: "web",
  //     image: "/placeholder.svg?height=200&width=400",
  //     duration: "3 months",
  //     level: "Beginner to Intermediate",
  //     students: "1500+",
  //     rating: 4.8,
  //     features: [
  //       "HTML5 and CSS3 fundamentals",
  //       "JavaScript programming and DOM manipulation",
  //       "Responsive web design principles",
  //       "Frontend frameworks (React.js)",
  //       "Backend development with Node.js",
  //       "Database integration with MongoDB",
  //     ],
  //     curriculum: [
  //       {
  //         module: "Module 1: HTML & CSS",
  //         topics: ["HTML structure", "CSS styling", "Responsive design", "CSS frameworks (Bootstrap)"],
  //       },
  //       {
  //         module: "Module 2: JavaScript",
  //         topics: ["JS syntax", "DOM manipulation", "Events", "Asynchronous JavaScript"],
  //       },
  //       {
  //         module: "Module 3: Frontend Development",
  //         topics: ["React.js basics", "Components", "State management", "Routing"],
  //       },
  //       {
  //         module: "Module 4: Backend Development",
  //         topics: ["Node.js", "Express.js", "RESTful APIs", "Authentication"],
  //       },
  //       {
  //         module: "Module 5: Database & Deployment",
  //         topics: ["MongoDB", "CRUD operations", "Deployment", "Performance optimization"],
  //       },
  //     ],
  //     career: ["Web Developer", "Frontend Developer", "UI Developer", "Full Stack Developer", "Web Designer"],
  //     certification: "Certified Web Development Professional",
  //   },
  //   {
  //     id: 5,
  //     title: "MS Office Suite",
  //     description: "Master Microsoft Office applications including Word, Excel, PowerPoint and Access.",
  //     category: "office",
  //     image: "/placeholder.svg?height=200&width=400",
  //     duration: "1.5 months",
  //     level: "Beginner to Advanced",
  //     students: "2000+",
  //     rating: 4.6,
  //     features: [
  //       "Word processing and document formatting",
  //       "Excel spreadsheets and data analysis",
  //       "PowerPoint presentations and design",
  //       "Access database management",
  //       "Outlook email and calendar management",
  //       "Integration between Office applications",
  //     ],
  //     curriculum: [
  //       {
  //         module: "Module 1: Microsoft Word",
  //         topics: ["Document formatting", "Tables and graphics", "Mail merge", "Advanced features"],
  //       },
  //       {
  //         module: "Module 2: Microsoft Excel",
  //         topics: ["Spreadsheet basics", "Formulas and functions", "Data analysis", "Pivot tables and charts"],
  //       },
  //       {
  //         module: "Module 3: Microsoft PowerPoint",
  //         topics: ["Presentation design", "Animations", "Multimedia integration", "Delivery techniques"],
  //       },
  //       {
  //         module: "Module 4: Microsoft Access",
  //         topics: ["Database concepts", "Tables and relationships", "Queries", "Forms and reports"],
  //       },
  //       {
  //         module: "Module 5: Microsoft Outlook",
  //         topics: ["Email management", "Calendar", "Contacts", "Tasks and notes"],
  //       },
  //     ],
  //     career: [
  //       "Office Administrator",
  //       "Executive Assistant",
  //       "Data Entry Specialist",
  //       "Office Manager",
  //       "Administrative Coordinator",
  //     ],
  //     certification: "Microsoft Office Specialist (MOS)",
  //   },
  //   {
  //     id: 6,
  //     title: "Digital Marketing",
  //     description: "Learn SEO, social media marketing, content creation and digital advertising strategies.",
  //     category: "marketing",
  //     image: "/placeholder.svg?height=200&width=400",
  //     duration: "2 months",
  //     level: "Beginner to Intermediate",
  //     students: "850+",
  //     rating: 4.7,
  //     features: [
  //       "Search Engine Optimization (SEO)",
  //       "Social Media Marketing",
  //       "Content Marketing",
  //       "Email Marketing",
  //       "Google Ads and PPC",
  //       "Analytics and Performance Tracking",
  //     ],
  //     curriculum: [
  //       {
  //         module: "Module 1: Digital Marketing Fundamentals",
  //         topics: ["Marketing principles", "Digital landscape", "Customer journey", "Marketing funnel"],
  //       },
  //       {
  //         module: "Module 2: Search Engine Optimization",
  //         topics: ["On-page SEO", "Off-page SEO", "Technical SEO", "Keyword research"],
  //       },
  //       {
  //         module: "Module 3: Social Media Marketing",
  //         topics: ["Platform strategies", "Content creation", "Community management", "Paid social"],
  //       },
  //       {
  //         module: "Module 4: Content & Email Marketing",
  //         topics: ["Content strategy", "Blogging", "Email campaigns", "Automation"],
  //       },
  //       {
  //         module: "Module 5: Paid Advertising & Analytics",
  //         topics: ["Google Ads", "Display advertising", "Google Analytics", "Reporting and optimization"],
  //       },
  //     ],
  //     career: [
  //       "Digital Marketing Specialist",
  //       "SEO Analyst",
  //       "Social Media Manager",
  //       "Content Marketer",
  //       "PPC Specialist",
  //     ],
  //     certification: "Certified Digital Marketing Professional",
  //   },
  // ]
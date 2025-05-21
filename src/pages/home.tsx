import { useState, useEffect } from "react"
import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { Courses } from "@/components/home/courses"
import { Features } from "@/components/home/features"
import { StudentsReview } from "@/components/home/students-review"



export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Hero isVisible={isVisible} />
      <Stats/>
      <Courses/>
      <Features/>
      <StudentsReview studentReviews={studentReviews} />
    </div>
  )
}


const studentReviews = [
  {
    name: "Vikas Prajapati",
    role: "DCA",
    content:"Hello , I m Vikas Prajapati. I did the training in PARADISE COMPUTER INSTITUTE I enrolled there for Diploma in computer Application (DCA) It was the wonderful experience.",
    avatar: "",
    rating : "4.9"
  },
  {
    name: "Ariza",
    role: "ADCA + O Level",
    content:"Excellent tips I never knew. Best class I have taken with excellent teaching, Informative and entertaining. Nice balance of allowing students to grapple with problems and helping resolve with the help of supportive teachers ever.",
    avatar: "",
    rating : "4.9"
  },
  {
    name: "Bushra Zehra",
    role: "ADCA",
    content:"The teachers at PARADISE COMPUTER INSTITUTE are highly knowledgeable and supportive, making complex concepts easy to understand. Their guidance helped me to achieve my goals❤️",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW2L49K7HnwjM35LY43cGOtVMru4M3CPvXcbeulJhWPR5-aD8xE=w90-h90-p-rp-mo-br100",
    rating : "4.7"
  },
  {
    name: "Shams Kaif",
    role: "",
    content:"I have been studying Advance Excel And Tally prime advance. Salman sir good Teaches.",
    avatar: "",
    rating : "4.5"
  },
  {
    name: "Mohd samad Husain",
    role: "",
    content:"Education knowledge is excellent and good teaching it’s a best computer institute",
    avatar: "",
    rating : "4.5"
  },
  {
    name: "Aman Prajapati",
    role: "",
    content:"A great education with great and supportive teachers",
    avatar: "",
    rating : "4.6"
  },
  {
    name: "Saheb Alam",
    role: "",
    content:"one of the best computer institute in jaunpur",
    avatar: "",
    rating : "4.4"
  },
  {
    name: "Hasan Rizvi",
    role: "",
    content:"This is a very good computer institute in Jaunpur",
    avatar: "",
    rating : "4.9"
  },
  {
    name: "Himanshu Verma",
    role: "",
    content:"One of the best computer institute and best faculty",
    avatar: "",
    rating : "4.8"
  },
  {
    name: "Nutan Vishwakarma",
    role: "",
    content:"I am doing Advance Diploma in Computer Application from Paradise Computer Institute. It's a wonderful institute where you can explore more, can get lots of computer courses and programming languages, experienced teachers and, good learning environment as well. If you're looking for bright future in computer fields so, you must join this institute.",
    avatar: "",
    rating : "4.7"
  },
  {
    name: "Sana Yaseen",
    role: "",
    content:"Best institute in jaunpur ❤️",
    avatar: "",
    rating : "4.6"
  },
]
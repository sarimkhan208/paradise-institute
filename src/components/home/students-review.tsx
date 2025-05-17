import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import TestimonialCard from "./testemonials-card"

export const StudentsReview = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-[60px] laptop:px-4">
            <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">What Our Students Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Hear from our alumni about their learning experience and how our courses helped them achieve their career
              goals.
            </p>
            </motion.div>

            <Carousel
            opts={{
                align: "start",
            }}
            className="w-full "
            >
            <CarouselContent>
              {
                testimonials.map((testimonial, index)=>(
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full ">
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                    </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    </section>
  )
}


  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Developer",
      content:
        "The Python course at Paradise Computer Institute helped me transition into a tech career. The instructors were knowledgeable and supportive throughout my learning journey.",
      avatar: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
      rating : '4.5'
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Accountant",
      content:
        "Learning Tally at Paradise was the best decision for my career. The practical approach to teaching helped me apply my skills immediately at work.",
      avatar: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
      rating : '4.8'
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Web Developer",
      content:
        "The web development program is comprehensive and up-to-date with industry standards. I was able to build my portfolio during the course itself!",
      avatar: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
      rating : '4.2'
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Accountant",
      content:
        "Learning Tally at Paradise was the best decision for my career. The practical approach to teaching helped me apply my skills immediately at work.",
      avatar: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
      rating : '4.3'
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Web Developer",
      content:
        "The web development program is comprehensive and up-to-date with industry standards. I was able to build my portfolio during the course itself!",
      avatar: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
      rating : '4.9'
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Accountant",
      content:
        "Learning Tally at Paradise was the best decision for my career. The practical approach to teaching helped me apply my skills immediately at work.",
      avatar: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
      rating : '4.3'
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Web Developer",
      content:
        "The web development program is comprehensive and up-to-date with industry standards. I was able to build my portfolio during the course itself!",
      avatar: "https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586577.jpg?semt=ais_hybrid&w=740",
      rating : '4.5'
    },
  ]
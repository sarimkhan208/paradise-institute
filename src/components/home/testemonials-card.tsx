"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialProps {
  testimonial: {
    id: number
    name: string
    role: string
    content: string
    avatar: string
    rating : string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar className="h-20 w-20 " >
          <AvatarImage className="object-cover " src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
          
        </div>
      </CardHeader>
      <CardContent>
      <div className="flex items-center">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-1 text-sm font-medium">{testimonial.rating}</span>
          </div>
        <p className="text-slate-600">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  )
}

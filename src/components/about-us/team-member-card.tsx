"use client"

import { Linkedin, Twitter } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  member: {
    id: number
    name: string
    role: string
    bio: string
    image: string
    socialLinks: {
      linkedin?: string
      twitter?: string
    }
  }
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden transition-all h-full duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-1 text-xl font-bold text-slate-900">{member.name}</h3>
        <p className="mb-4 text-teal-600">{member.role}</p>
        <p className="text-sm text-slate-600">{member.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start space-x-2 p-6 pt-0">
        {member.socialLinks.linkedin && (
          <Button variant="outline" size="icon" asChild>
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        )}
        {member.socialLinks.twitter && (
          <Button variant="outline" size="icon" asChild>
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

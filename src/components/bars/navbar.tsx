import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"
import { Link as ReactScroll } from "react-scroll"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about-us" },
    { name: "Facilities", href: "facilities" },
    { name: "Testimonials", href: "testimonials" },
  ]

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300 ",
        location.pathname == "/our-students" ? "bg-white" : isScrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-transparent",
         
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-[70px] " >
              <img className="h-full w-full object-contain " src="/logo.png" alt="logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.slice(0,3).map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-100",
                    isScrolled ? "text-slate-700" : "text-slate-800",
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {navLinks.slice(3,5).map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ReactScroll to={link.href} spy={true} smooth={true} offset={-150} duration={500}
                  className={cn(
                    "px-4 cursor-pointer py-2 text-sm font-medium transition-colors rounded-md hover:bg-slate-100",
                    isScrolled ? "text-slate-700" : "text-slate-800",
                  )}
                >
                  {link.name}
                </ReactScroll>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            >
              <Link target="_blank" to={"https://docs.google.com/forms/d/e/1FAIpQLSfxGZdZzKOMhc84IslYEWBikI47b5IuFbsV51ojNTkXIe3_Lg/viewform?usp=dialog"} >
              <Button className="ml-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">Enroll Now</Button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {navLinks.slice(3, 5).map((link) => (
                  <ReactScroll to={link.href} spy={true} smooth={true} offset={-150} duration={500}
                    key={link.name}
                    className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </ReactScroll>
                ))}
                <Button className="mt-2 w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                  <Link target="_blank" to={"https://docs.google.com/forms/d/e/1FAIpQLSfxGZdZzKOMhc84IslYEWBikI47b5IuFbsV51ojNTkXIe3_Lg/viewform?usp=dialog"} >
                  Enroll Now
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}



{/* <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
  <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
    Paradise
  </span>
  <span className="text-2xl font-medium text-slate-700"> Computer Institute</span>
</motion.div> */}
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion";


export const Features = () => {
  return (
    <section id="facilities" className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
            <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Paradise Computer Institute?</h2>
            <p className="mx-auto max-w-2xl text-lg text-teal-50">
                We provide a supportive learning environment with state-of-the-art facilities to ensure your success.
            </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
                <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-teal-300" />
                <p className="text-lg">{feature}</p>
                </motion.div>
            ))}
            </div>
        </div>
    </section>
  )
}


const features = [
    "Experienced faculty with industry expertise",
    "Hands-on practical training",
    "Modern computer labs with latest software",
    "Small batch sizes for personalized attention",
    "Flexible timing options",
    "Placement assistance for top performers",
    "Internship opportunities with partner companies",
    "Regular test on every week",
]
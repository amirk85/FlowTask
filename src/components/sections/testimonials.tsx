"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "FlowTask completely changed how we ship software. The AI scheduling is actually useful, unlike other tools we've tried.",
    author: "Sarah Jenkins",
    role: "CTO at TechStart",
    avatar: "bg-purple-500",
    rating: 5
  },
  {
    quote: "I was skeptical about the 'AI workflows' claim, but it genuinely saves me about 10 hours a week on admin work.",
    author: "Marcus Chen",
    role: "Product Manager at DevCorp",
    avatar: "bg-brand-teal",
    rating: 5
  },
  {
    quote: "The best UI I've used in a project management tool. It feels like it was designed by people who actually write code.",
    author: "Elena Rodriguez",
    role: "Frontend Lead at Designify",
    avatar: "bg-brand-blue",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by <span className="text-brand-teal">Builders</span></h2>
          <p className="text-muted-foreground text-lg">Join 5,000+ teams shipping faster with FlowTask.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm relative"
            >
              <Quote className="absolute top-8 right-8 text-brand-teal/20" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg mb-8 relative z-10">"{item.quote}"</p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${item.avatar} flex items-center justify-center text-white font-bold text-xl`}>
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-bold">{item.author}</div>
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

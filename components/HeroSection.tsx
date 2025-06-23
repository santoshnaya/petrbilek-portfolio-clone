'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Webflow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8"
        >
          <span className="text-blue-600 font-medium text-sm">
            🌊 Webflow Certified Designer
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          <span className="text-black">Czech-based </span>
          <span className="bg-mint px-4 py-2 rounded-lg inline-block transform -rotate-1">
            designer
          </span>
          <br />
          <span className="text-black">crafting </span>
          <span className="bg-pink px-4 py-2 rounded-lg inline-block transform rotate-1">
            meaningful
          </span>
          <br />
          <span className="bg-yellow px-4 py-2 rounded-lg inline-block transform -rotate-1">
            experiences
          </span>
        </motion.h1>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center cursor-pointer"
            onClick={() => {
              const element = document.querySelector('#about')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 
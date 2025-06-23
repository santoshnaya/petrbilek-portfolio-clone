'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const ProjectCards = () => {
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

  const cards = [
    {
      title: 'Design assets',
      description: "As part of my side hustle, I'm dropping some sick design assets like icons, banners, and web templates.",
      cta: 'Check all assets →',
      bgColor: 'bg-mint',
      textColor: 'text-black',
    },
    {
      title: 'Design Blog',
      description: 'Blogging about both design and personal life. Join my 6k+ monthly newsletter crew for the latest and greatest in the design world.',
      cta: 'Read my blog →',
      bgColor: 'bg-yellow',
      textColor: 'text-black',
    },
    {
      title: 'Full time Designer',
      description: "P.S. I'm also the Visual Designer for Lemonero on a full-time basis. #hustlehard",
      cta: 'Find out more →',
      bgColor: 'bg-pink',
      textColor: 'text-black',
    },
  ]

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-16"
        >
          <div className="flex items-center mb-8 md:mb-0">
            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mr-6">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">PB</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">
                Sup y'all! <br />
                It's Petr Bilek
              </h2>
              <div className="flex items-center">
                <span className="text-red-500 mr-2">📍</span>
                <span className="text-gray-600">Prague, Czech Republic</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="bg-purple-100 px-4 py-2 rounded-lg inline-block mb-2">
              <span className="text-purple-700 font-medium">📝 Microsoft OneNote</span>
            </div>
            <p className="text-xl font-handwritten transform rotate-2 text-gray-800">
              Note to myself <br />
              Work for Passion. <br />
              Design for users. <br />
              Live for family. <br />
              💜💜💜
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${card.bgColor} rounded-3xl p-8 ${card.textColor} cursor-pointer h-full flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-base leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center font-semibold hover-underline"
              >
                {card.cta}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectCards 
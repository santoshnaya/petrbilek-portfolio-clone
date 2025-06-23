'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              Since the very beginning of discovering my interest in online
              design, I have always tried to approach my work as if I were doing
              it for myself. I put all of my effort into it and strive to utilize all
              known standards while adding my own innovations.
            </p>

            <p>
              From the very beginning of my career, I knew that the online
              environment and graphic design were exactly what I wanted to
              dedicate myself to. Through hard work and trial and error, I have
              learned the principles and strategies suitable for that particular
              field.
            </p>

            <p>
              I have learned to use my diligence to listen to the needs of
              customers and come up with necessary solutions across websites,
              mobile applications, and web pages.
            </p>

            <p>
              However, <span className="font-semibold underline">thanks to effective tools</span> and continuous learning, I would
              never be where I am now. I am a humble person living for my
              family. In my spare time, I create digital assets for designers and
              write articles about self-discovery and digital product in general.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 
'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const links = [
    { text: 'Meet Petr →', href: '#about' },
    { text: 'Read a Blog →', href: '#blog' },
    { text: "What's my Stack →", href: '#stack' },
    { text: 'Join my newsletter →', href: '#newsletter' },
    { text: 'Checkout Products →', href: '#products' },
    { text: 'Get in touch with me →', href: '#contact' },
    { text: 'Follow me on Twitter →', href: 'https://twitter.com' },
    { text: 'Join me on Dribbble →', href: 'https://dribbble.com' },
  ]

  return (
    <footer id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Links */}
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={link.href}
                whileHover={{ x: 10 }}
                className="block text-2xl md:text-3xl font-bold text-black hover-underline transition-colors hover:text-gray-600"
              >
                {link.text}
              </motion.a>
            </motion.div>
          ))}

          {/* Webflow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
              <span className="text-blue-600 font-medium text-sm">
                🌊 Webflow Certified Designer
              </span>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center pt-12 border-t border-gray-200"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <p className="text-gray-600">
                  Designed in <span className="underline">Figma</span> and built with{' '}
                  <span className="underline">Webflow</span>.
                </p>
                <p className="text-gray-600">
                  © 2023 by <span className="underline">petrbilek.com</span>
                </p>
              </div>
            </div>

            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Cookies and Privacy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                License
              </a>
            </div>
          </motion.div>

          {/* Made in Webflow Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-end pt-4"
          >
            <div className="text-blue-600 text-sm font-medium">
              🌊 Made in Webflow
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 
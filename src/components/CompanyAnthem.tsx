'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CompanyAnthem = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0F0326] to-[#88BF42] inline-block mb-4">
            The Heart of Thor Signia
          </h2>
          <p className="text-[#696869] max-w-3xl mx-auto mt-4 text-lg mb-12">
            This song captures our spirit — innovation, unity, and the relentless drive to shape the future of AI. 
            It&apos;s more than music; it&apos;s our story, our people, and our passion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-[#88BF42]/20 transition-all duration-300 group-hover:shadow-xl bg-gradient-to-br from-[#88BF42]/10 to-[#0F0326]/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[#88BF42] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#0F0326] font-medium">Video Coming Soon</p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default CompanyAnthem

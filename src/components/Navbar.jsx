import React from 'react'
import { motion } from 'framer-motion'
import Resume from '../assets/resume/Resume.pdf'

const Navbar = () => {
  return (
    <div>
      <motion.nav
        className='grid grid-cols-3 gap-3 w-full fixed z-30  -top-3 mt-0 pt-0 '
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className='p-2 m-3 text-gray-800 md:text-[20px] font-bold '>
          Adarsh Namdeo
        </span>
        <ul className='grid grid-cols-5 gap-3 p-2 m-3 text-gray-600 font-bold backdrop-blur-sm'>
          <li>
            <a
              href='#home'
              className='hover:border border-gray-700 rounded-2xl px-3 py-1'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#services'
              className='hover:border border-gray-700 rounded-2xl px-3 py-1'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='hover:border border-gray-700 rounded-2xl px-3 py-1'
            >
              Tech
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='hover:border border-gray-700 rounded-2xl px-3 py-1'
            >
              Work
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:border border-gray-700 rounded-2xl px-3 py-1'
            >
              Contacts
            </a>
          </li>
        </ul>
        <div className='grid grid-cols-2 gap-2 w-60 h-10 m-5 absolute  right-0  '>
          <button className='bg-gray-600 text-white rounded-lg '><a href={Resume}  target="_blank" rel="noopener noreferrer">Resume</a></button>
          <button className=' bg-gray-600 text-white rounded-lg'>
            <a href='tel:+917974278003'>Lets Talk</a>
          </button>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar

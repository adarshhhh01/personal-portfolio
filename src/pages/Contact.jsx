import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Camera, Link, Code  } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    // API logic can be added later
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      setFormData({
        fullName: '',
        email: '',
        message: ''
      })

      setTimeout(() => setIsSubmitted(false), 2000)
    }, 1000)
  }

  return (
    <div
      id='contact'
      className='min-h-screen bg-[#9E9E9E] flex items-center justify-center px-6 md:px-10 py-10'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1.6fr_minmax(0,1fr)] gap-12'
      >
        {/* LEFT SECTION */}
        <motion.section
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col justify-between'
        >
          <div>
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='text-[54px] md:text-[96px] leading-none font-semibold text-[#11160f] mb-12'
            >
              Contact
            </motion.h1>

            <motion.form onSubmit={handleSubmit} className='space-y-8 max-w-xl'>
              {/* Full Name */}
              <div className='space-y-2'>
                <label className='text-sm uppercase tracking-wide text-[#11160f]/80'>
                  Full name
                </label>
                <input
                  type='text'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  className='w-full bg-transparent border-b border-[#11160f] py-3 outline-none'
                  required
                />
              </div>

              {/* Email */}
              <div className='space-y-2'>
                <label className='text-sm uppercase tracking-wide text-[#11160f]/80'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-transparent border-b border-[#11160f] py-3 outline-none'
                  required
                />
              </div>

              {/* Message */}
              <div className='space-y-2'>
                <label className='text-sm uppercase tracking-wide text-[#11160f]/80'>
                  Message
                </label>
                <textarea
                  rows='3'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full bg-transparent border-b border-[#11160f] py-3 outline-none resize-none'
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='mt-10 inline-flex items-center justify-center px-10 py-3 rounded-full bg-[#11160f] text-sm font-medium tracking-wide text-orange-300 hover:scale-105 transition-transform disabled:opacity-50'
              >
                {isSubmitting
                  ? 'Submitting...'
                  : isSubmitted
                  ? 'Sent!'
                  : 'Submit'}
              </button>
            </motion.form>
          </div>
        </motion.section>

        {/* RIGHT CONTACT CARD */}
        <motion.aside
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center md:justify-end'
        >
          <div className='w-full max-w-sm bg-gray-300 rounded-4xl shadow-lg overflow-hidden'>
            <div className='bg-[#11160f] text-white px-8 py-7'>
              <p className='uppercase tracking-[0.25em] text-orange-300 text-sm'>
                Contact
              </p>
              <h2 className='mt-2 text-lg font-semibold'>
                Get in touch with us!
              </h2>
            </div>

            <div className='px-8 py-6 space-y-5'>
              <div className='flex items-center gap-4'>
                <div className='h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center'>
                  @
                </div>
                <div>
                  <p className='text-xs uppercase text-gray-500'>Email</p>
                  <p className='text-sm font-medium'>
                    adarshnamdeo76@gmail.com
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center'>
                  <Phone />
                </div>
                <div>
                  <p className='text-xs uppercase text-gray-500'>Phone</p>
                  <p className='text-sm font-medium'>+91 7974278003</p>
                </div>
              </div>
              {/* Instagram */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className='flex items-center gap-4'
              >
                <div className='h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-[#11160f] text-lg'>
                  <Camera />
                </div>
                <div className=''>
                  <p className='text-xs text-gray-500 uppercase'>Instagram</p>
                  <p className='text-sm font-medium'>@adarshnamdeo30</p>
                </div>
              </motion.div>

              {/* YouTube */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
                className='flex items-center gap-4 '
              >
                <div className='h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-[#11160f] text-lg'>
                  <Link />
                </div>
                <div className=''>
                  <p className='text-xs text-gray-500 uppercase'>LinkedIn</p>
                  <p className='text-sm font-medium'>
                    <a href='https://www.linkedin.com/in/adarsh-namdeo-390700251/'>
                      https://www.linkedin.com/in/adarsh-namdeo-390700251/
                    </a>
                  </p>
                </div>
              </motion.div>
              <div className='flex items-center gap-4'>
                <div className='h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-[#11160f]'>
                  <Code />
                </div>
                <div>
                  <p className='text-xs uppercase text-gray-500'>GitHub</p>
                  <a
                    href='https://github.com/adarshhhh01'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm font-medium hover:underline'
                  >
                    github.com/adarshhhh01
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </div>
  )
}

export default Contact

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Resume from "../assets/resume/Resume.pdf"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ================= BACKDROP (MOBILE ONLY) ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-20 backdrop-blur-md bg-black/10 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-30 bg-transparent"
      >
        {/* MAIN BAR */}
        <div className="flex items-center justify-between px-5 py-4">
          {/* LOGO */}
          <span className="text-gray-800 font-bold text-[18px] md:text-[20px]">
            Adarsh Namdeo
          </span>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-4 text-gray-600 font-bold">
            <li><a href="#home" className="hover:border border-gray-700 rounded-2xl px-3 py-1">Home</a></li>
            <li><a href="#services" className="hover:border border-gray-700 rounded-2xl px-3 py-1">About</a></li>
            <li><a href="#about" className="hover:border border-gray-700 rounded-2xl px-3 py-1">Tech</a></li>
            <li><a href="#projects" className="hover:border border-gray-700 rounded-2xl px-3 py-1">Work</a></li>
            <li><a href="#contact" className="hover:border border-gray-700 rounded-2xl px-3 py-1">Contacts</a></li>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex gap-2">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-white rounded-lg px-4 py-2"
            >
              Resume
            </a>
            <a
              href="tel:+917974278003"
              className="bg-gray-600 text-white rounded-lg px-4 py-2"
            >
              Lets Talk
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button className="md:hidden z-30" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden px-5 pb-6 space-y-3"
            >
              <a onClick={() => setOpen(false)} href="#home" className="block text-gray-600 font-bold">Home</a>
              <a onClick={() => setOpen(false)} href="#services" className="block text-gray-600 font-bold">About</a>
              <a onClick={() => setOpen(false)} href="#about" className="block text-gray-600 font-bold">Tech</a>
              <a onClick={() => setOpen(false)} href="#projects" className="block text-gray-600 font-bold">Work</a>
              <a onClick={() => setOpen(false)} href="#contact" className="block text-gray-600 font-bold">Contacts</a>

              <div className="flex gap-2 pt-2">
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white rounded-lg px-4 py-2 w-full text-center"
                >
                  Resume
                </a>
                <a
                  href="tel:+917974278003"
                  className="bg-gray-600 text-white rounded-lg px-4 py-2 w-full text-center"
                >
                  Lets Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar

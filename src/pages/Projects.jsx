import { motion } from "framer-motion";
import google_review from "../assets/images/google_review.png";
import uber_start from '../assets/images/uber_start.png';


const projects = [
  {
    title: "Real-Time Device Tracker",
    tag: "Full Stack",
    image: "/projects/device-tracker.png",
    link: "https://github.com/yourusername/device-tracker",
  },
  {
    title: "EmpowerHer – AI Finance Mentor",
    tag: "AI / Web App",
    image: "/projects/empowerher.png",
    link: "https://empowerher.vercel.app",
  },
  {
    title: "Uber Clone UI",
    tag: "MERN Stack",
    image: uber_start,
    link: "https://uberclone1adarshnamdeo73-3672s.vercel.app/",
  },
  {
    title: "Google-Review-System",
    tag: "Frontend",
   image: google_review,
    link: "https://google-review-psi.vercel.app?_vercel_share=lu3KwiUF01fQLaKjeOZzQIplXx7O9TpS",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen w-full bg-gray-300 text-gray-700 flex items-center"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            My <span className="text-gray-900">Recent Works</span>
          </h1>

          {/* Filter Pills (UI only for now) */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm">
            {["All", "Frontend", "Full Stack", "UI/UX"].map((item) => (
              <button
                key={item}
                className="px-4 py-1 rounded-full bg-gray-400 text-gray-200 hover:bg-gray-300/40 hover:text-black transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-[#15162b] to-[#050111] border border-gray-500/20 shadow-lg"
            >
              {/* Screenshot */}
              <div className="h-48 md:h-56 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-300">
                    {project.tag}
                  </p>
                  <h3 className="text-lg font-semibold mt-1 text-white">
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-4 py-1.5 rounded-full border border-gray-400 text-gray-300 group-hover:bg-gray-500 group-hover:text-white transition"
                >
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

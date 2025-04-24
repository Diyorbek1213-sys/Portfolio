import { useEffect } from "react"
import dev from "../assets/dev.png"
import { motion } from "framer-motion"
import telegram from "../assets/telegram.svg"
import fiverr from "../assets/fiverr.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import react from "../assets/react.jpg"
import next from "../assets/next.jpg"
import typescript from "../assets/type.jpg"
import tailwind from "../assets/tailwind.jpg"
import useStore from "../mainStore/useStore"

export default function Home() {
  const { projects, fetchProjects } = useStore()

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  }

  return (
    <div className="font-[Preahvihear] text-[#E9D8FE] pt-24 sm:pt-28 md:pt-32 lg:pt-32 px-4 md:px-6 lg:px-8 w-full mx-auto">
      <section id="hero" className="mb-16 md:mb-24">
        <div className="flex justify-center items-center flex-col">
          <div className="w-full max-w-6xl">
            <motion.h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
            >
              Hello! I Am <span className="text-[#7127BA]">Diyorbek</span>
            </motion.h3>

            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-6">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.1 }}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 md:mb-0"
              >
                <img
                  src={dev || "/placeholder.svg"}
                  alt="Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              <div className="md:ml-6 w-full max-w-xl">
                <motion.h3
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.1 }}
                  className="text-lg md:text-xl lg:text-2xl text-center md:text-left"
                >
                  Who is a Web Developer?
                </motion.h3>
                <motion.h2
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 text-center md:text-left"
                >
                  Frontend Developer | <span className="text-[#7127BA]">UI</span>/
                  <span className="text-[#7127BA]">UX</span> Enthusiast
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base lg:text-lg mt-2 text-center md:text-left"
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  Frontend Developer | React | TailwindCSS | Framer Motion
                </motion.p>
              </div>
            </div>

            <div className="mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto text-center bg-[#7127BA]/20 backdrop-blur rounded-md p-5">
              <motion.h2
                custom={5}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight"
              >
                Passionate about web development, UI/UX, and building interactive, high-performance websites.
              </motion.h2>
              <motion.h3
                className="text-lg md:text-xl lg:text-2xl text-[#B378FE] mt-4"
                custom={6}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.1 }}
              >
                Freelancer on Fiverr | Open-source Contributor
              </motion.h3>
              <motion.h3
                className="text-lg md:text-xl lg:text-2xl text-[#E9D8FE] mt-4"
                custom={7}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.1 }}
              >
                My Skills
              </motion.h3>

              <motion.div
                className="mt-7 grid grid-cols-4 max-[410px]:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
                custom={8}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div
                  className="max-sm:max-w-[150px] sm:max-w-[180px]"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                      <img className="rounded-xl w-full" src={react || "/placeholder.svg"} alt="reactJS" />
                    </a>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mt-2 max-sm:text-[14px]">ReactJS</h3>
                </motion.div>

                <motion.div
                  className="max-sm:max-w-[150px] sm:max-w-[180px]"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                      <img className="rounded-xl w-full" src={next || "/placeholder.svg"} alt="nextJS" />
                    </a>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mt-2 max-sm:text-[14px]">NextJS</h3>
                </motion.div>

                <motion.div
                  className="max-sm:max-w-[150px] sm:max-w-[180px]"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <a href="https://typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                      <img className="rounded-xl w-full" src={typescript || "/placeholder.svg"} alt="TypeScript" />
                    </a>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mt-2 max-sm:text-[14px]">TypeScript</h3>
                </motion.div>

                <motion.div
                  className="max-sm:max-w-[150px] sm:max-w-[180px]"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                      <img className="rounded-xl w-full" src={tailwind || "/placeholder.svg"} alt="TailwindCSS" />
                    </a>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mt-2 max-sm:text-[14px]">TailwindCSS</h3>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mb-16 md:mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            custom={9}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About me,
          </motion.h3>
          <motion.p
            custom={10}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            A self-taught Frontend Developer specializing in React.js, Next.js, and modern web technologies. With a
            strong foundation in JavaScript, HTML, and CSS, I build interactive, high-performance, and user-centric
            digital experiences. Passionate about API integration, responsive design, and seamless UI/UX...
          </motion.p>
        </div>
      </section>

      <section id="projects" className="mb-16 md:mb-24">
        <div className="max-w-12xl mx-auto">
          <motion.h3
            custom={11}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10"
          >
            Projects
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            custom={12}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.length > 0 &&
              projects.map((project) => (
                <div
                  className="relative h-full backdrop-blur-lg rounded-md bg-[#2C1250]/30 border-b-4 border-[#4F228D] flex flex-col"
                  key={project.id}
                >
                  <img
                    className="rounded-t-md w-full aspect-video object-cover"
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="font-bold text-xl mt-2">{project.title}</h3>
                    <p className="mt-3">{project.description}</p>
                  </div>
                  <div className="p-4 flex items-center justify-between w-full mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, color: "#875eae" }}
                      whileTap={{ scale: 0.95, opacity: 0.8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-lg border bg-[#2C1250] border-[#693B93] text-sm font-[Poppins] py-2 px-4 inline-block cursor-pointer"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: "#875eae" }}
                      whileTap={{ scale: 0.9, opacity: 0.8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-full bg-gray-800/90 border border-[#693B93] p-3 inline-flex items-center justify-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              ))}

            {projects.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-xl">Loading projects...</p>
              </div>
            )}
          </motion.div>
          <div className="flex justify-center items-center">
            <motion.a
              href='https://github.com/Diyorbek1213-sys?tab=repositories'
              target="_blank"
              custom={13}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: "#875eae" }}
              whileTap={{ scale: 0.95, opacity: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-10 rounded-lg border bg-[#2C1250] border-[#693B93] text-sm font-[Poppins] py-4 font-bold text-[20px] px-10 inline-block cursor-pointer"
            >
              View More
            </motion.a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#4F228D]/30 to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            custom={14}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          >
            Contact me
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-16">
            {/* Telegram */}
            <motion.div
              custom={15}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex backdrop-blur-md gap-4 sm:gap-6 p-4 sm:p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428]/30 via-[#251043]/30 to-[#190634]/30 h-full"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mt-3">
                <img src={telegram || "/placeholder.svg"} alt="telegram" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-[Poppins]">Telegram</h3>
                <motion.a
                  href="https://t.me/Web_CodeCraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-lg border bg-[#2C1250] border-[#693B93] text-sm font-[Poppins] py-2 px-4 inline-block mt-3 cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>

            {/* Fiverr */}
            <motion.div
              custom={16}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex backdrop-blur-md gap-4 sm:gap-6 p-4 sm:p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428]/30 via-[#251043]/30 to-[#190634]/30 h-full"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mt-3">
                <img src={fiverr || "/placeholder.svg"} alt="fiverr" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-[Poppins]">Fiverr</h3>
                <motion.a
                  href="https://www.fiverr.com/birorkimbiror"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-lg border bg-[#2C1250] border-[#693B93] text-sm font-[Poppins] py-2 px-4 inline-block mt-3 cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>

            {/* Twitter */}
            <motion.div
              custom={17}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex backdrop-blur-md gap-4 sm:gap-6 p-4 sm:p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428]/30 via-[#251043]/30 to-[#190634]/30 h-full"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mt-3">
                <img src={twitter || "/placeholder.svg"} alt="twitter" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-[Poppins]">Twitter</h3>
                <motion.a
                  href="https://x.com/GulomovDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-lg border bg-[#2C1250] border-[#693B93] text-sm font-[Poppins] py-2 px-4 inline-block mt-3 cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>

            {/* Facebook */}
            <motion.div
              custom={18}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex backdrop-blur-md gap-4 sm:gap-6 p-4 sm:p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428]/30 via-[#251043]/30 to-[#190634]/30 h-full"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mt-3">
                <img className="w-full h-full" src={facebook || "/placeholder.svg"} alt="facebook" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-[Poppins]">Facebook</h3>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61558303925151"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: "#875eae" }}
                  whileTap={{ scale: 0.95, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-lg border bg-[#2C1250] border-[#693B93] text-sm font-[Poppins] py-2 px-4 inline-block mt-3 cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center mb-10">
            <motion.a
              href="download"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              custom={19}
              download={'../public/Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: "#875eae" }}
              whileTap={{ scale: 0.95, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg border bg-[#2C1250] border-[#693B93] text-sm font-[Poppins] py-2 px-4 inline-block mt-3 cursor-pointer"
            >
              Download Resume
            </motion.a>
          </div>

          {/* GitHub Section */}
          <motion.div
            className="bg-[#FFFFFF]/5 backdrop-blur-lg p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 max-w-4xl mx-auto"
            custom={20}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center sm:text-left">
              All my projects are in this link (GitHub)
            </h2>
            <motion.a
              href="https://github.com/Diyorbek1213-sys"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#875eae" }}
              whileTap={{ scale: 0.9, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-full bg-gray-800/90 border border-[#693B93] p-3 inline-flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </motion.a>
          </motion.div>

          <div className="text-center pb-37">
            <motion.h1
              className="font-bold text-3xl sm:text-4xl md:text-5xl"
              custom={21}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
            >
              0
            </motion.h1>
          </div>
        </div>
      </section>
    </div>
  )
}
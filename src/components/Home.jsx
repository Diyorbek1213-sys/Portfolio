import React from 'react';
import dev from '../assets/dev.png';
import Gradient from '../assets/Gradient.png';
import { motion } from "framer-motion";
import telegram from '../assets/telegram.svg'
import fiverr from '../assets/fiverr.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 70 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
    }),
  }

  return (
    <div className="font-[Preahvihear] text-[#E9D8FE] pt-40 md:pt-40 sm:pt-40 lg:pt-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <section id="hero" className="mb-16 md:mb-24">
        <div className="flex justify-center items-center flex-col">
          <div className="w-full max-w-6xl">
            <motion.h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              Hello! I Am <span className="text-[#7127BA]">Diyorbek</span>
            </motion.h3>

            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-6">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 md:mb-0"
              >
                <img
                  src={dev}
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
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  Who is a Web Developer?
                </motion.h3>
                <motion.h2
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2"
                >
                  Frontend Developer | <span className="text-[#7127BA]">UI</span>/
                  <span className="text-[#7127BA]">UX</span> Enthusiast
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base lg:text-lg mt-2"
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Frontend Developer | React | TailwindCSS | Framer Motion
                </motion.p>
              </div>
            </div>

            <div className="mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto text-center">
              <motion.h2
                custom={5}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
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
                viewport={{ once: true, amount: 0.2 }}
              >
                Freelancer on Fiverr | Open-source Contributor
              </motion.h3>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mb-16 md:mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            custom={7}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About me,
          </motion.h3>
          <motion.p
            custom={8}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            A self-taught Frontend Developer specializing in React.js, Next.js, and modern web technologies. With a
            strong foundation in JavaScript, HTML, and CSS, I build interactive, high-performance, and user-centric
            digital experiences. Passionate about API integration, responsive design, and seamless UI/UX...
          </motion.p>
        </div>
      </section>

      <section id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#4F228D]/30 to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            custom={8}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          >
            Contact me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
            {/* Telegram */}
            <motion.div
              custom={9}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex gap-6 p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] h-full"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center mt-3">
                <img src={telegram} alt="telegram" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold font-[Poppins]">Telegram</h3>
                <motion.a
                  href="https://t.me/GOLDRESELLER_N1"
                  target="blank"
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
              custom={10}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex gap-6 p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] h-full"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center mt-3">
                <img src={fiverr} alt="fiverr" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold font-[Poppins]">Fiverr</h3>
                <motion.a
                  href="https://www.fiverr.com/birorkimbiror"
                  target="blank"
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
              custom={11}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex gap-6 p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] h-full"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center mt-3">
                <img src={twitter} alt="twitter" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold font-[Poppins]">Twitter</h3>
                <motion.a
                  href="https://x.com/GulomovDev"
                  target="blank"
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
              custom={12}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="flex gap-6 p-6 border-t-4 border-[#4F228D] rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634] h-full"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center mt-3">
                <img className='w-full h-full' src={facebook} alt="facebook" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold font-[Poppins]">Facebook</h3>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61558303925151"
                  target="blank"
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

          {/* GitHub Section */}
          <motion.div
            className="bg-[#FFFFFF]/5 backdrop-blur-lg p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 max-w-4xl mx-auto"
            custom={13}
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
              target="blank"
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
                className="w-8 h-8"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


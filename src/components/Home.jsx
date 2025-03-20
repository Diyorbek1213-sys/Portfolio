import React from 'react';
import dev from '../assets/dev.png';
import Gradient from '../assets/Gradient.png';
import { motion } from "framer-motion";
import telegram from '../assets/telegram.svg'
import fiverr from '../assets/fiverr.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 70 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 }
    }),
  };


  return (
    <div className='font-[Preahvihear] text-[#E9D8FE] pt-[130px]'>
      <section id='hero'>
        <div className='flex justify-center items-center flex-col'>
          <div className='flex justify-center flex-col mt-[10px] items-start'>
            <motion.h3
              className="text-[19px] text-white"
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              Hello! I Am <span className='text-[#7127BA]'>Diyorbek</span>
            </motion.h3>

            <div className='flex items-center space-x-[-50px]'>
              <motion.img
                custom={1}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
                src={dev} alt="dev" />
              <div className='max-w-[386px]'>
                <motion.h3
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Who is a Web Developer?
                </motion.h3>
                <motion.h2
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, amount: 0.2 }}
                  className='text-[40px] text-[#E9D8FE] tracking-[0.32px]'
                >
                  Frontend Developer | <span className='text-[#7127BA]'>UI</span>/<span className='text-[#7127BA]'>UX</span> Enthusiast
                </motion.h2>
                <motion.p className='text-[14px] text-[#E9D8FE] tracking-[0.32px]'
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
            <div name="about" className='max-w-[674px] mb-[70px]'>
              <motion.h2
                custom={5}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
                className='text-[25px] tracking-[0.32px]'
              >Passionate about web development, UI/UX, and building interactive, high-performance websites.</motion.h2>
              <motion.h3 className='text-[21px] tracking-[0.32px] text-[#B378FE]'
                custom={6}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.2 }}
              >
                Freelancer on Fiverr | Open-source Contributor
              </motion.h3>
            </div>
            <motion.h3
              custom={7}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
              className='text-[50px]'
            >About me,
            </motion.h3>
            <motion.p
              custom={8}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.2 }}
              className='max-w-[892px] text-[22px] tracking-[0.32px]'
            >
              A self-taught Frontend Developer specializing in React.js, Next.js, and modern web technologies. With a strong foundation in JavaScript, HTML, and CSS, I build interactive, high-performance, and user-centric digital experiences. Passionate about API integration, responsive design, and seamless UI/UX, I craft meaningful web applications that balance innovation, aesthetics, and functionality. My goal is to bridge the gap between user needs and business objectives by developing scalable, efficient, and visually appealing web solutions that leave a lasting impact
            </motion.p>
          </div>
        </div>
      </section>

      <section id='experience'>
        <div
          name="lab"
          style={{
            backgroundImage: `url(${Gradient})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: '360px',
            backgroundPositionY: '40px',
          }}
          className='pt-25 pb-5'
        >
          <motion.h2
            custom={8}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
            className='text-[35px]'
          >
            Contact me
          </motion.h2>

          {/* https://www.fiverr.com/birorkimbiror */}

          <div className='mt-[44px] grid grid-cols-2 gap-x-5 gap-y-5 pb-[50px]'>
            <motion.div
              custom={9}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-[18px] flex gap-[26px] py-[36px] px-[50px] border-t-4 border-[#4F228D] w-[570px] h-[192px] p-6 text-white rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634]"
            >
              <img src={telegram} alt="telegram" />
              <div>
                <h3 className="text-[26px] leading-[42.5px] font-semibold font-[Poppins]">Telegram</h3>
                <motion.a href='https://t.me/GOLDRESELLER_N1' target='blank'
                  whileHover={{ scale: 1.1, color: "#875eae" }}
                  whileTap={{ scale: 0.9, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[10px] border bg-[#2C1250] border-[#693B93] text-[14px] font-[Poppins] py-[10px] px-[23px] inline-block mt-[10px] cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              custom={10}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-[18px] flex gap-[26px] py-[36px] px-[50px] border-t-4 border-[#4F228D] w-[570px] h-[192px] p-6 text-white rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634]"
            >
              <img src={fiverr} alt="fiverr" />
              <div>
                <h3 className="text-[26px] leading-[42.5px] font-semibold font-[Poppins]">Fiverr</h3>
                <motion.a href='https://www.fiverr.com/birorkimbiror' target='blank'
                  whileHover={{ scale: 1.1, color: "#875eae" }}
                  whileTap={{ scale: 0.9, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[10px] border bg-[#2C1250] border-[#693B93] text-[14px] font-[Poppins] py-[10px] px-[23px] inline-block mt-[10px] cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              custom={11}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-[18px] flex gap-[26px] py-[36px] px-[50px] border-t-4 border-[#4F228D] w-[570px] h-[192px] p-6 text-white rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634]"
            >
              <img src={twitter} alt="twitter" />
              <div>
                <h3 className="text-[26px] leading-[42.5px] font-semibold font-[Poppins]">Twitter</h3>
                <motion.a href='https://x.com/GulomovDev' target='blank'
                  whileHover={{ scale: 1.1, color: "#875eae" }}
                  whileTap={{ scale: 0.9, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[10px] border bg-[#2C1250] border-[#693B93] text-[14px] font-[Poppins] py-[10px] px-[23px] inline-block mt-[10px] cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              custom={12}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
              className="mb-[18px] flex gap-[26px] py-[36px] px-[50px] border-t-4 border-[#4F228D] w-[570px] h-[192px] p-6 text-white rounded-xl shadow-lg bg-gradient-to-r from-[#130428] via-[#251043] to-[#190634]"
            >
              <img src={facebook} alt="facebook" />
              <div>
                <h3 className="text-[26px] leading-[42.5px] font-semibold font-[Poppins]">Facebook</h3>
                <motion.a href='https://www.facebook.com/profile.php?id=61558303925151' target='blank'
                  whileHover={{ scale: 1.1, color: "#875eae" }}
                  whileTap={{ scale: 0.9, opacity: 0.8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[10px] border bg-[#2C1250] border-[#693B93] text-[14px] font-[Poppins] py-[10px] px-[23px] inline-block mt-[10px] cursor-pointer"
                >
                  OPEN
                </motion.a>
              </div>
            </motion.div>

            <motion.div className='bg-[#FFFFFF]/5 backdrop-blur-lg p-5 rounded-2xl flex items-center gap-4'
              custom={13}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className='text-[30px]'>All my projects are in this link (GitHub)</h2>
              <motion.a href='https://github.com/Diyorbek1213-sys' target='blank'
                whileHover={{ scale: 1.1, color: "#875eae" }}
                whileTap={{ scale: 0.9, opacity: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-[10px] border bg-[gray]/90 border-[#693B93] text-[14px] font-[Poppins] py-[10px] px-[23px] inline-block mt-[10px] cursor-pointer"
              >
                <img className='max-w-[50px]' src={github} alt="github" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

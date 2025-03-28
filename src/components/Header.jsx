import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1A0B2E]/20 backdrop-blur-lg py-4 md:py-6 lg:py-[32px] px-4 sm:px-6 md:px-10 lg:px-[200px] flex justify-between items-center fixed top-0 left-0 w-full text-white z-50">
      <div>
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Mobile menu button */}
      <button className="lg:hidden text-white focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden lg:block">
        <nav>
          <ul className="flex items-center gap-8 xl:gap-[168px]">
            <li className="text-[#A792C3] font-[jakarta] font-semibold tracking-[0.32px]">
              <Link
                activeClass="text-white"
                to="about"
                smooth={true}
                spy={true}
                duration={1000}
                offset={-500}
                className="cursor-pointer hover:text-white transition-all"
              >
                About
              </Link>
            </li>
            <li className="text-[#A792C3] font-[jakarta] font-semibold tracking-[0.32px]">
              <Link
                activeClass="text-white"
                to="contact"
                smooth={true}
                spy={true}
                duration={1000}
                offset={-100}
                className="cursor-pointer hover:text-white transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#1A0B2E]/20 backdrop-blur-lg py-4"
          >
            <nav>
              <ul className="flex flex-col items-center gap-6">
                <li>
                  <Link
                    activeClass="text-white"
                    to="about"
                    smooth={true}
                    duration={1000}
                    offset={-500}
                    className="text-[#A792C3] font-[jakarta] font-semibold tracking-[0.32px] cursor-pointer hover:text-gray-400 hover:underline transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-white"
                    to="contact"
                    smooth={true}
                    duration={1000}
                    offset={-100}
                    className="text-[#A792C3] font-[jakarta] font-semibold tracking-[0.32px] cursor-pointer hover:text-gray-400 hover:underline transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

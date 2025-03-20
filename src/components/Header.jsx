import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className='bg-[#1A0B2E]/20 backdrop-blur-lg py-[32px] px-[200px] flex justify-between items-center fixed top-0 left-0 w-full text-white p-4 z-50'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <nav>
                    <ul className='flex items-center gap-[168px]'>
                        <li className='text-white font-[jakarta] font-semibold tracking-[0.32px]'><Link to="about" smooth={true} duration={1000} offset={-200} className="cursor-pointer hover:text-gray-400 hover:underline transition-all">About</Link></li>
                        <li className='text-white font-[jakarta] font-semibold tracking-[0.32px]'><Link to="lab" smooth={true} duration={1000} offset={-100} className="cursor-pointer hover:text-gray-400 hover:underline transition-all">Experiences</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
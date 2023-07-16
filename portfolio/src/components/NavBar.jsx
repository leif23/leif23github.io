import React from 'react'
import tailwind from '../assets/tailwind.config.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs' 
import {Link} from 'react-scroll'

import { useState } from 'react'


const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)

    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={tailwind} alt="Logo Image" style={{width:"90px"}}
            ></img>
        </div>
        
            {/* MENU */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                    <li>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                            About
                    </Link>
                </li>

                <li>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>

                <li>
                    <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
                            Work
                    </Link>
                </li>

                <li>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            Contact
                    </Link>
                </li>
            </ul>
        
        {/* Mobile  Menu bar  */}
        <div className='md:hidden z-20' onClick={handleClick}>
            {!nav ? <FaBars/> : <FaTimes/> }
        </div>

    {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" spy={true} smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" spy={true} smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" spy={true} smooth={true} offset={50} duration={500} >
                            Work
                    </Link>
                </li>

                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            Contact
                    </Link>
                </li>
            </ul>

        {/* Social Icons  */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                
                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300'>  <a className='flex justify-between items-center w-full' href='https://github.com/leif23'> 
                    GitHub <FaGithub size={40}/>
                </a>
                </li>

                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300'>  <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/leif-orosco/'> 
                    LinkedIn <FaLinkedin size={40}/>
                </a>
                </li>

                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300'>  <a className='flex justify-between items-center w-full' href='mailto:leiforosco0254@gmail.com'> 
                    Mail <HiOutlineMail size={40}/>
                </a>
                </li>

                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300'>  <a className='flex justify-between items-center w-full' href='https://drive.google.com/file/d/1PEju69O22qK08HCdzWIYabQc_dxLuJvw/view?usp=drive_link'> 
                    Resume <BsFillPersonLinesFill size={40}/>
                </a>
                </li>
                
            </ul>
        </div>

    </div>



    )}
export default NavBar
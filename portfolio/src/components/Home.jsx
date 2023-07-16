import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import{Link} from 'react-scroll'
import { useState } from 'react'
const Home = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)
    return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-red-600 '> Hi my name is  </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Leif Orosco</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'> I'm a Full Stack Developer </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> Hi! I'm Leif Orosco , a software engineer fresher graduate from Coding Dojo part of Colorado Technical University, Welcome to my portfolio, Where you can see some of the software projects that i have work during my studies and in my spare time. I enjoy developing software applications that are useful, reliable and frameworks, such as Java Spring Boot , Python Django Flask, HTML CSS JAVASCRIPT, React NodeJs MySQL NoSQL APIS REST. I'm always eager to learn new technologies and improve my skills. I'm also interested in working on software applications that have positive impact on society, such as education, healthcare or environmental. feel free to browse through my portfolio and contact me if you have any question or feedback. thank you for visiting</p> 
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>  View Work
             <span className='group-hover:rotate-90 duration-300'>
                
                <Link onClick ={handleClick} to="work" spy={true} smooth={true} offset={50} duration={500}>
                    < HiArrowNarrowRight  className='ml:3' size={25} />
                </Link>
            </span>
                
            </button>
        </div>
        </div>
        
    </div>
    )
}

export default Home
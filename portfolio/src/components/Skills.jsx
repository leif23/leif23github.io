import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.ico'
import JAVA from'../assets/java.ico'
import JS from '../assets/JS.png'
import PY from '../assets/py.png'
import FLASK from '../assets/Flask.png'
import MYSQL from '../assets/MySQL.png'
import AWS from '../assets/aws.png'
import REACT from '../assets/react.png'
import SB from '../assets/SB.png'
import NODEJS from '../assets/NodeJS.png'
import MDB from '../assets/mongodb.svg'
import GH from '../assets/GH.png'

const Skills = () => {
  return (

    <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 '>Skills</p>
                <p className='py-4'> // These are the technologies I've work with </p>
            </div>

        </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
                <p className='my-4'> HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='HTML icon'/>
                <p className='my-4'> CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JS} alt='HTML icon'/>
                <p className='my-4'> JAVASCRIPT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JAVA} alt='HTML icon'/>
                <p className='my-4'> JAVA</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={PY} alt='HTML icon'/>
                <p className='my-4'> Python</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={FLASK} alt='HTML icon'/>
                <p className='my-4'> Flask</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MYSQL} alt='HTML icon'/>
                <p className='my-4'> MySQL</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NODEJS} alt='HTML icon'/>
                <p className='my-4'> NodeJS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={AWS} alt='HTML icon'/>
                <p className='my-4'> AWS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={REACT} alt='HTML icon'/>
                <p className='my-4'> REACT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={SB} alt='HTML icon'/>
                <p className='my-4'> Spring Boot</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={MDB} alt='HTML icon'/>
                <p className='my-4'> MONGODB</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GH} alt='HTML icon'/>
                <p className='my-4'> GITHUB</p>
            </div>

        </div>

        


    </div>
    )
}

export default Skills
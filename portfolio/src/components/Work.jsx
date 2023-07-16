import React from 'react'
import GPROJECT from'../assets/GPROJECT.jpg'
import OWNPROJECT from'../assets/OWNPROJECT.jpg'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
                <p className='py-6'>// Checkout some of my recent Work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 shadow-lg md:grid-cols-3 gap-4' >

                {/* Grid  */}
                <div style={{ backgroundImage:` url(${GPROJECT}) ` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                            Graduation in Life
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://github.com/leif23/Graduating-In-Life.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div  style={{ backgroundImage:`url(${OWNPROJECT})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Books
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/leif23/Books-Solo-Project.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Work
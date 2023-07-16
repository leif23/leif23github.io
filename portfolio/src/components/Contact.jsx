import React from 'react'

const Contact = () => {
    return (
    <div name='contact' className='w-full bg-[#0c192f] flex justify-center items-center p-4'>
        <form action=" https://getform.io/f/2ec9b865-e28b-415a-bdb1-d86a42a875a9" method='POST' className='flex flex-col max-w-[600px] w-full'>

            <div className=' pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300 '> Contact</p>
                <p className='text-gray-300 p-4'>// Submit the form below or shoot me an email - leiforosco81@gmail.com</p>
            </div>
            <input className=' bg-[#ccd6f6] p-2' placeholder='Name' type="text" name="name" />
            <input className='my-4 p-2 bg-[#ccd6f6]' placeholder='Email' name='emai' type='email' /> 
            <textarea className='p-2 bg-[#ccd6f6] 'name="message" rows="10  " placeholder="Message" />

            <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-3 py-84 my-8 mx-auto flex items-center '> Submit</button>
        </form>
    </div>  
    )
}

export default Contact
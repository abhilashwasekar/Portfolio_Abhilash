import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#C23B22] font-bold font-sans sm:text-2xl'>Hi My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] font-sans'>Rameez Qazi</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] font-sans'>I am Fronend Web Developer,</h2>
                <p className='py-5 max-w-[700px] text-[#8892b0] font-sans'>
                    I am a dedicated and skilled Frontend Developer with a specialization in HTML, CSS, JavaScript, and TypeScript.
                    With a keen eye for design and a passion for creating seamless user experiences,
                    I am focused in building mobile responsive web applications.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans'>View My Work

                        <span className='group-hover:ml-6 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />

                        </span>

                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home

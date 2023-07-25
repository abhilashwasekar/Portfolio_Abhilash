import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [navView, setNavView] = useState(false);


    const handleNav = () => {

        setNavView(!navView)
    }


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className='text-xl'>
                <TypeAnimation
                    sequence={[
                        "Rameez Qazi",
                        1000,
                        // "Web Developer",
                        // 1000,
                        // "React Developer",
                        // 1000,
                    ]}
                    speed={50}
                // repeat={Infinity}
                // style={{ fontSize: '1em' }}
                />

            </div>

            {/* menu */}
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            


            {/* Humberger Menu */}
            <div className='md:hidden z-10' onClick={handleNav}>
                {!navView ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!navView ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>

            </ul>

            <div></div>

        </div>
    )
}

export default Navbar

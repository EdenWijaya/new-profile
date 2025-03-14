import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-13rem)'
    }
    
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(13rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if (scrollY > 50) {
                setIsScroll(true)
            }else {
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

        <nav className={`w-full fixed px-5 lg:px-8 xk:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
            <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            href="#top">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-20 cursor-pointer mr-14'/>
            </motion.a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <motion.li 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a className='font-Ovo' href="#top">Home</a>
                </motion.li>

                <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a className='font-Ovo' href="#about">About Me</a>
                </motion.li>

                <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a className='font-Ovo' href="#project">Project</a>
                </motion.li>

                <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a className='font-Ovo' href="#kontak">Contact</a>
                </motion.li>
            </ul>

            <div className='flex items-center gap-4'>
                <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                onClick={()=>setIsDarkMode(prev => !prev)}>
                    <Image src={ isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                </motion.button>

                <motion.a 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                href="#kontak" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                    contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3'/>
                </motion.a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                </button>
            </div>

            {/* mobile menu */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 bg-rose-50 transition duration-1000 dark:bg-darkHover dark:text-white'>

                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='absolute right-16 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </motion.div>

                <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <a className='font-Ovo' onClick={closeMenu} href="#top">Home</a>
                </motion.li>

                <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a>
                </motion.li>
                
                <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <a className='font-Ovo' onClick={closeMenu} href="#project">Project</a>
                </motion.li>

                <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                >
                    <a className='font-Ovo' onClick={closeMenu} href="#kontak">Contact</a>
                </motion.li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
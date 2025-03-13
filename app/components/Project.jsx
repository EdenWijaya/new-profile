import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Project = ({isDarkMode}) => {
  return (
    <div id='project' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my portfolio page! Here you can see some of my college works and latest projects.
      </p>

      {/* Memperlebar grid agar sejajar dengan elemen di atasnya */}
      <div className='max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 dark:text-black'>
        {workData.map((project, index) => (
          <div 
            key={index} 
            className='h-64 bg-no-repeat bg-cover bg-center rounded-xl shadow-md relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='bg-white w-10/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 flex items-center justify-between shadow-lg transition-all duration-300 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold text-base'>{project.title}</h2>
                <p className='text-sm text-gray-600'>{project.description}</p>
              </div>

              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
              <Image 
                src={assets.send_icon} 
                alt='send icon'
                className='w-[20] h-[20]'
              />
              </div>
            </div>
          </div>
        ))}
      </div>

        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
          show more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='right arrow' className='w-4' />
        </a>

    </div>
  )
}

export default Project

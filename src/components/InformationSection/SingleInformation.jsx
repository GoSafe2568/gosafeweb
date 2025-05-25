import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const SingleInformation = ({ name, year, align, image, link }) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end`}>
      <div>
        <h2 className='md:text-3xl sm:text-2xl text-green-800' style={{ fontFamily: "'Kanit', sans-serif" }}>{name}</h2>
        <h2 className={`text-xl font-thin text-gray-700 font-sans sm:text-center ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>{year}</h2>
        <Link to={link} className={`text-lg flex gap-2 items-center text-black hover:text-gray-500 transition-all duration-500 cursor-pointer sm:justify-self-center ${align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'}`}>
          View <BiSolidRightTopArrowCircle />
        </Link>
      </div>

      <Link to={link}>
        <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white cursor-pointer'>
          <div className='w-full h-full bg-cyan-500 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
          <img src={image} alt='Information Image' className='w-full h-full ' />
        </div>
      </Link>
    </div>
  )
}

export default SingleInformation

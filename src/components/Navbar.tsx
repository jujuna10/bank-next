'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  const [activeLink, setActiveLink] = useState<string>('Home')

  const links: string[] = ['Home', 'About', 'Service', 'Our Cards', 'Contact']

  const getPosition = (link: string) => {
    switch (link) {
      case 'Home':
        return 'translateX(-200%) translateY(-10%)';
      case 'About':
        return 'translateX(-112%) translateY(-10%) ';
      case 'Service':
        return 'translateX(-22%) translateY(-10%) ';
      case 'Our Cards':
        return 'translateX(85%) translateY(-10%) ';
      case 'Contact':
        return 'translateX(195%) translateY(-10%) ';
      default:
        return 'translateX(-200%) translateY(-10%) ';
    }
  };

  return (
    <div className='w-full h-[35%] flex items-start justify-center gap-[24%]'>
      <div className='flex gap-2 items-center mt-5'>
        <Image src='/logo.png' width={50} height={50} alt='logo'/>
        <p className='text-white text-[25px]'>CHAPLIN</p>
      </div>

      <div className='w-[30%] flex gap-4 bg-[rgb(24,20,53)] justify-center py-4 rounded-[50px] relative mt-5'>
         
        <div className="absolute bg-blue-500 h-[50px] rounded-[35px] w-[17%]  transition-all duration-700" style={{ transform: getPosition(activeLink) }}></div>

        {links.map((item, index) => {
          return (
            <button key={index} onClick={() => setActiveLink(item)} className={`px-3 py-2 rounded-lg text-gray-300 relative z-10 transition-all duration-500`}>{item}</button>
          )
        })}
      </div>

        <div className='flex gap-5 mt-7'>
          <button className='bg-[rgb(22,18,55)] px-7 py-2 rounded-[50px] text-white'>Login</button>
          <button className='bg-[rgb(102,83,224)] px-7 py-2 rounded-[50px] text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar;

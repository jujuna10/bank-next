import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className='flex flex-col gap-4 mt-[10%]'>
        <div className='flex flex-col items-center gap-12'>
            <h1 className='text-white text-[90px] max-w-[60%] text-center tracking-wide space-x-2'>Transform Your Finances with Digital Solutions</h1>
            <p className='text-gray-400 text-[18px] max-w-[35%] text-center'>Welcome to Prospa, where expertise meets innovation. Founded with a commitment to excellence.</p>
        </div>
        <div className='flex justify-center mt-8'>
            <button className='text-white bg-[rgb(95,76,221)] px-5 py-3 rounded-[50px] text-[20px]'>Start Project</button>
            <button className='bg-[rgb(95,76,221)] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center'><Image src='/right-down.png' width={28} height={28} alt='arrow' className='invert rotate-[270deg]' /></button>
        </div>
    </div>
  )
}

export default HeroSection
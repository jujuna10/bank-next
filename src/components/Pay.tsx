import React from 'react'
import Image from 'next/image'

function Pay() {
  return (
    <div className='w-[80%] mt-[200px] h-[700px] ml-[10%] bg-gradient-to-r from-[#090714] to-[#241d50] gap-[20%] rounded-[50px] overflow-hidden'>
        <div className='h-full border-[2px] border-transparent' style={{ borderImage: 'linear-gradient(to right, rgb(51,47,82), rgb(36,28,77)) 1 ',WebkitMaskImage: 'linear-gradient(white, white)',maskImage: 'linear-gradient(white, white)'  }}> 
            <div className='flex justify-center items-center h-full w-full gap-[10%] ml-[10%]'>
                <Image src='/girls.png' width={520} height={520} alt='girls' className='rounded-[20px]' />
                <div className='w-[65%]'>
                    <p className='text-[18px] text-gray-400'>Explore The App</p>
                    <p className='text-bigtext text-[60px] max-w-[50%]'>Pay Friends And Fmily Instantly</p>
                    <p className='text-gray-400 max-w-[50%]'>Split the bill or share expenses with MAJORITY Pay, the instant, free, and easy way to pay other MAJORITY members. You can also link your account to Zelle®, Cash App®, and Venmo®.</p>
                    <div className='flex mt-5'>
                        <button className='text-white px-5 py-3 rounded-[50px] text-[20px] border-[1px] border-[rgb(41,34,78)]'>Learn More</button>
                        <button className=' rounded-[50%] w-[50px] h-[50px] flex justify-center items-center border-[1px] border-[rgb(41,34,78)]'><Image src='/right-down.png' width={28} height={28} alt='arrow' className='invert rotate-[270deg]' /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pay
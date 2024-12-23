import React from 'react'
import Image from 'next/image'
import p1 from '../../public/p1.png'
import p2 from '../../public/p2.png'
import p3 from '../../public/p3.png'
import p4 from '../../public/p4.png'


function Services() {

    const images = [p1,p4,p2,p3]
    const text:string[] = ['Get Paid early','Explore Cashback','Sign Up Without ssn','Find a free ATM']

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='bg-[rgb(243,243,255)] mt-[90px] rounded-[50px] w-[80%] justify-center items-center'>
            <div className='flex flex-col items-center mt-[35px]'>
                <p className='text-gray-400'>EXPLORE THE APP</p>
                <p className='text-[60px] font-bold max-w-[70%] text-center'>Discover the Wealth of Features Within Our Innovative App</p>
            </div>
            <div className='relative'>
                <div className='flex gap-[5%] justify-center mt-[100px]'>
                    {images.map((item,index:number) => (
                        <div key={index} className='relative'>
                            <Image src={item} width={10000000000000} height={1000000000000} alt={`${images[index]}`} className='w-[290px] h-[320px] rounded-[20px]' />
                            <div className='absolute bottom-0 bg-white bg-opacity-25 w-full flex justify-center items-center h-[25%] gap-5'>
                                <p className='text-white text-[25px]'>{text[index]}</p>
                                <button className='rounded-[50%] w-[35px] h-[35px] flex justify-center items-center border-[1px] bg-white'><Image src='/right-down.png' width={25} height={25} alt='arrow' className=' rotate-[270deg]' style={{filter: 'invert(35%) sepia(100%) saturate(1000%) hue-rotate(220deg) brightness(80%)'}}  /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
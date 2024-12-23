import React from 'react'
import Image from 'next/image'
import busimenss from '../../public/buismenss.jpg'
import busimenss2 from '../../public/buismenss2.webp'
import busimenss3 from '../../public/buismenss3.jpg'


function Info() {

    const images = [busimenss, busimenss2, busimenss3]
    const numbers = [0,1,2,3,4,5]
  return (
    <div className='flex justify-center gap-12 mt-12'>
        <div className='bg-[rgb(21,16,46)] relative w-[25%] h-[320px] rounded-[20px] border-[1px] border-[rgb(29,32,65)]'>
            <Image src='/cards.png' width={450} height={370} alt='cards' className='translate-y-[-12%]' />
            <div className='w-full h-[43.2%] opacity-50 absolute bg-gray-400 bottom-0 rounded-b-[20px]'></div>
        </div>

        <div className='flex flex-col gap-[20px]'>
            <div className='flex gap-12  items-center bg-[rgb(21,16,46)] w-[100%] pl-8 h-[150px] rounded-[20px]'>
                <div className='w-[35px] h-[35px] rounded-[50%] bg-[rgb(102,83,225)]'></div>
                <p className='text-[30px] text-white'>5M+ <span className='text-[15px] text-gray-500'>Active Users</span></p>
                <div className='flex'>
                    {images.map((item,index:number) => (
                        <Image key={index} src={item} width={1000000000} height={120} alt='business' className={`h-[50px] w-[50px] rounded-[50%] ml-[10px] border-[1px] border-gray-500 ${index !== 0 ? 'translate-x-[-55%]' : ''} ${index !== 0 && index !== 1 ? 'translate-x-[-105%]' : ''}`} />
                    ))}
                </div>
            </div>

            <div className='flex gap-12  items-center bg-[rgb(21,16,46)] w-[100%] pl-8 h-[150px] rounded-[20px]'>
                <div className='w-[35px] h-[35px] rounded-[50%] bg-[rgb(102,83,225)]'></div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[16px] text-gray-500'>06,Jan,2024</p>
                    <p className='text-[30px] text-white'>Online Demo</p>
                </div>
                <Image src='/qr.png' width={100} height={100} alt='qr' className='rounded-[5px]' />
            </div>
        </div>

        <div className='bg-[rgb(21,16,46)] w-[25%] rounded-[20px] p-[25px]'>
            <div className='flex flex-col gap-8'>
                <p className='text-[25px] text-gray-200'>Our Business Growth</p>
                <div>
                    <p className='text-[35px] text-white'>+48%</p>
                    <p className='text-[15px] text-gray-500'>Grow since last day</p>
                </div>
            </div>
            <div className='w-[135%] flex gap-7 flex-row-reverse justify-center rotate-180 translate-x-[-20%]'>
                {numbers.map((item,index) => (
                    <div key={index}>
                        <div className={`w-[50px] bg-white rounded-[10px] ${index === 5 ? '!bg-blue-500' : ''} `} style={{ height: `${item * 20}px` }}></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Info
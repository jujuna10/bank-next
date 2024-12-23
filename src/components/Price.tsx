import React from 'react'
import Image from 'next/image'

function Price() {

    const text:string[] = ['Open an account even without SSN','Earn cashback with the MAJORITHY debit card','Send money transfers and top-ups','Make free calls to 20+ countries','Try 30 days for free']

  return (
    <div className={`w-full mt-[550px] flex justify-center h-[650px]`}>
        <div className='w-[80%] bg-gradient-to-r from-[#090714] to-[#241d50] flex gap-[5%] justify-center items-center rounded-[50px] border-[2px] border-transparent' style={{ borderImage: 'linear-gradient(to right, rgb(51,47,82), rgb(36,28,77)) 1 ',borderRadius: '50px',WebkitMaskImage: 'linear-gradient(white, white)',maskImage: 'linear-gradient(white, white)'  }}> 
            <div className='w-full h-full bg-gradient-to-r from-[#090714] to-[#241d50] flex gap-[5%] justify-center items-center rounded-[50px]'>
                <div className='ml-[12%]'>
                    <Image src='/acc.png' width={850} height={850} alt='acc' />
                </div>
                <div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px] text-gray-400'>Explore The App</p>
                        <p className='text-bigtext text-[50px] max-w-[80%]'>All-In-One Membership Only $5.99/Month</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {text.map((item:string,index:number) => (
                            <div key={index} className='flex gap-2'>
                                <div className='bg-[rgb(69,159,239)] flex flex-col justify-center items-center gap-2 rounded-[50%] w-[25px] h-[25px]'>
                                    <Image src='/done.png' width={15} height={15} alt='done' className='invert' />
                                </div>
                                <p className='text-companies'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Price
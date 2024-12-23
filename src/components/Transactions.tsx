import React from 'react'
import Image from 'next/image'
import man1 from '../../public/man1.jpg'
import man2 from '../../public/man2.jpeg'
import man3 from '../../public/man3.jpg'
import women1 from '../../public/women1.jpg'
import women2 from '../../public/women2.webp'
import women3 from '../../public/women3.jpg'


function Transactions() {

    const names:string[] = ['Courtney Henry','Leslie Alexander','Leslie Alexander','Guy Hawkins','Ralph Edwards','Annette Black']
    const companie:string[] = ['Figma','Netflix','Spotify','Figma','Spotify','Netflix']
    const status:string[] = ['Pending','Completed','Completed','Pending','Completed','Completed']
    const money:string[] = ['$10.36','$10.20','$20.30','$12.26','$10.15','$30.10']
    const images = [man1,man2,man3,women1,women2,women3]

  return (
    <div>
        <div className='w-[80%] mt-[200px] h-[700px] ml-[10%] bg-gradient-to-r from-[#090714] to-[#241d50] flex justify-center  rounded-[50px]'> 
            <div className='w-full h-full bg-gradient-to-r from-[#241d50] to-[#090714] flex gap-[5%] justify-center items-center rounded-[50px]'>
                <div className='flex flex-col gap-2 ml-20'>
                    <div>
                        <p className='text-[18px] text-gray-400'>Explore The App</p>
                        <p className='text-bigtext text-[50px] max-w-[50%]'>Send Money Internationally</p>
                        <p className='text-gray-400 max-w-[44%]'>Send money abroad at competitive exchange rates. Transparent fees make us cheaper than traditional banks, and our transfers are just as fast and secure.</p>
                    </div>
                    <div className='flex mt-5'>
                        <button className='text-white px-5 py-3 rounded-[50px] text-[20px] border-[1px] border-[rgb(41,34,78)]'>Start Project</button>
                        <button className=' rounded-[50%] w-[50px] h-[50px] flex justify-center items-center border-[1px] border-[rgb(41,34,78)]'><Image src='/right-down.png' width={28} height={28} alt='arrow' className='invert rotate-[270deg]' /></button>
                    </div>
                </div>

                <div className='bg-white p-5 rounded-[15px] w-[55%] h-[550px]'>
                    <div className='bg-[rgb(243,243,245)] rounded-[15px] h-[100%] p-5 flex flex-col gap-8'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-[20px]'>Transactions</p>
                            <p className='font-bold'>See all</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            {names.map((item,index) => (
                                <div key={index} className='flex justify-between'>
                                    {/* names and image */}
                                    <div className='flex gap-2 w-[31.6%]'>
                                        <Image src={images[index]} width={50} height={50} alt={`${images[index]}`} className={`rounded-[50%] w-[35px] h-[35px] object-cover`} />
                                        <div className='flex flex-col'>
                                            <p>{item}</p>
                                            <p>06/01/2024</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-[20%]'>
                                        <p className='text-gray-400'>{companie[index]}</p>
                                    </div>
                                    <div className='flex flex-col items-start justify-center w-[20%]'>
                                        <p className={`${status[index] === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>{status[index]}</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-[20%]'>
                                        <p className='font-bold'>{money[index]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Transactions
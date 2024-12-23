'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import mb from '../../public/mb.jpg'
import mb2 from '../../public/mb2.webp'
import mb3 from '../../public/mb3.jpg'
import wb from '../../public/wb.jpg'

function HappiensClinet() {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const images = [mb, mb2, mb3, wb]
    const text: string[] = [
        `"The level of excellence Prospa delivers is truly remarkable. Their expert financial guidance and streamlined processes have consistently exceeded my expectations, making every banking experience exceptional."`,
        `"Working with Prospa has transformed how I manage my finances. Their dedication to customer care and efficient financial solutions demonstrates why they stand out in the industry. Every interaction reinforces my trust in their expertise."`,
        `"I'm continuously impressed by Prospa's commitment to outstanding service. From their personalized financial planning to their smooth operational procedures, they've proven themselves to be an invaluable financial partner."`,
        `"My experience with Prospa has been nothing short of exemplary. Their professional team delivers unparalleled financial expertise while ensuring each transaction is handled with precision and care. They've set a new standard in financial services."`
    ];
    
    
    interface Person {
        name: string;
        work: string;
    }
    
    const namesAndProfession: Person[] = [
        { name: 'William Rothschild', work: 'Investment Banking Director' },
        { name: 'Charlotte Pemberton', work: 'Private Wealth Manager' },
        { name: 'Alexander Sterling', work: 'Risk Assessment Analyst' },
        { name: 'Elizabeth Hartley', work: 'Commercial Banking Executive' },
    ]

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }

    return (
        <div className='w-full flex justify-center items-center overflow-hidden'>
            <div className='bg-[rgb(243,243,255)] mt-[90px] rounded-[50px] w-[80%] justify-center items-center h-[600px] overflow-hidden'>
                <div className='flex flex-col items-center mt-[35px]'>
                    <p className='text-gray-400'>TESTIMONIAL</p>
                    <p className='text-[55px] font-bold max-w-[70%] text-center'>Our Happiens Client Reviews</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-5 mt-4 w-1/2">
                        {images.map((item, index) => (
                            index === currentIndex && (
                                <div key={index} className='ml-20 flex flex-col gap-5 w-[50%] h-[500px]'>
                                    <div className='max-h-[400px] overflow-hidden'>
                                        <p className='max-w-[100%] text-gray-400 text-[22px]'>{text[currentIndex]}</p>
                                    </div>
                                    <div>
                                        <p className='font-semibold opacity-80'>{namesAndProfession[currentIndex].name}</p>
                                        <p className='text-gray-500'>{namesAndProfession[currentIndex].work}</p>
                                    </div>
                                    <div className="flex justify-end gap-5 mt-[20px]">
                                        <button onClick={handlePrev} className="px-2 py-2 hover:bg-blue-600 duration-500 border-[1px] border-gray-400 rounded-[50%]"><Image src='/right-down.png' width={25} height={25} alt='arrow' className='hover:invert rotate-[135deg]' /></button>
                                        <button onClick={handleNext} className="px-2 py-2 hover:bg-blue-600 duration-500 border-[1px] border-gray-400 rounded-[50%]"><Image src='/right-down.png' width={25} height={25} alt='arrow' className='hover:invert rotate-[315deg]' /></button>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    <div className='flex justify-end items-center w-1/2 gap-2 translate-y-[-25%]'>
                        {images.map((item, index) => (
                            <Image key={index} src={item} alt={`Client image ${index}`} width={index === currentIndex ? 400 : 200} height={index === currentIndex ? 250 : 400} className={`transition-all duration-500 rounded-[20px] ${index === currentIndex ? 'opacity-100' : 'opacity-60'}`} style={{ transform: index === currentIndex ? 'scale(1)' : 'scale(0.8)',}} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
)
}

export default HappiensClinet

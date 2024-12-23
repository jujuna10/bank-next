import React from 'react'
import Image from 'next/image'
import airbnb from '../../public/airbnb.png'
import visa from '../../public/visa.png'
import apple from '../../public/apple.png'
import dropbox from '../../public/dropbox.png'
import wire from '../../public/wire.png'
import stripe from '../../public/stripe.png'
import amazon from '../../public/amazon.png'
import walmart from '../../public/walmart.png'



function Companies() {

    const images = [airbnb,visa,apple,dropbox,wire,stripe,amazon,walmart]
  return (
    <div className='mt-[150px] flex flex-col gap-20 w-full'>
        <div className='flex flex-col items-center'>
            <h1 className='text-companies text-[65px] max-w-[35%] text-center tracking-wide space-x-2 font-bold'>Trusted By Leading Corporations</h1>
            <p className='text-gray-400 text-[18px] max-w-[35%] text-center'>Our reputation for excellence is underscore by the trust placed in us by leading corporations worldwide. Our track record speaks volumes.</p>
        </div>
        <div className='grid grid-cols-4 justify-center pl-20 gap-y-[150%] w-full'>
        {images.map((item, index) => (
            <div key={index} className="relative bg-[rgb(21,16,46)] w-[80%] h-[290%] rounded-[20px] flex justify-center items-center ">
              <div 
                className="absolute inset-0 rounded-[20px] border-1 border-transparent bg-gradient-to-b from-[rgb(57,52,94)] to-[rgb(21,16,46)]">
              </div>
              <div className="relative bg-[rgb(21,16,46)] w-[98%] h-[98%] rounded-[18px] flex justify-center items-center z-10">
                <Image src={item} width={200} height={200} alt={`${images[index]}`} />
              </div>
          </div>
          
            ))}

        </div>
    </div>
  )
}

export default Companies
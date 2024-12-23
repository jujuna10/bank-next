'use client'
import React, { useContext } from 'react';
import { UserContext } from '../context/emailData';

function Started() {
    const { email, setEmail } = useContext(UserContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailInput = (e.target as HTMLFormElement).elements.namedItem("email") as HTMLInputElement;
        setEmail(emailInput.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

  return (
    <div className='w-full flex justify-center mt-20 py-12'>
        <div className='w-[80%] bg-gradient-to-r from-[#090714] to-[#241d50] py-12 flex flex-col gap-[5%] justify-center items-center rounded-[50px] border-[2px] border-transparent'> 
            <h1 className='text-bigtext text-[55px] text-center'>Get Started  your Finance Jurney</h1>
            <p className='text-gray-400 max-w-[39.2%] text-center'>Join us today and embark on a journey towards smarter,more secure finances. Your financial future awaits!</p>
            <div className='mt-12'>
                <form className='relative' onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" placeholder='Enter your email address' value={email} onChange={handleEmailChange} className='w-[170%] text-white pl-5 h-[55px] rounded-[50px] bg-gradient-to-r from-[#090714] to-[#1a182f] placeholder:text-gray-400' />
                    <button type='submit' className='absolute top-0 right-0 translate-x-[140.4%] w-[50%] h-[55px] bg-blue-700 rounded-[50px] text-yellow-400 font-bold'>Start Now</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Started;
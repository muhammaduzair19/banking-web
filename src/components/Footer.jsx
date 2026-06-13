import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPhone, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { ImLocation } from "react-icons/im";

const Footer = () => {
    return (
        <footer className='w-full flex text-grey-900 dark:text-white gap-6 relative flex-col justify-center items-center py-10 bg-white-3 dark:bg-grey-900 border-t border-grey-200 dark:border-grey-800 mt-20 transition-colors duration-300 rounded-3xl px-6 md:px-12'>
            <Image src={'/images/Logo.svg'} width={150} height={40} alt='YourBank Logo' className='dark:invert-0 invert transition-all' />
            <div className="flex gap-6 flex-wrap justify-center">
                {['home', 'career', 'about', 'security']?.map((i) => (
                    <Link key={i} href={i === 'home' ? '/' : `/${i}`} className="capitalize cursor-pointer text-grey-600 dark:text-grey-300 hover:text-grey-900 dark:hover:text-white transition-colors text-sm font-medium">
                        {i}
                    </Link>
                ))}
            </div>
            <hr className='w-full border-grey-200 dark:border-grey-800' />
            <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12">
                <span className='text-sm flex gap-2 items-center text-grey-600 dark:text-grey-300'>
                    <FaFacebookF className='text-lime-600 dark:text-limegreen-950' size={18} />
                    hello@yourbank.com
                </span>
                <span className='text-sm flex gap-2 items-center text-grey-600 dark:text-grey-300'>
                    <FaPhone className='text-lime-600 dark:text-limegreen-950' size={18} />
                    +91 91813 23 2309
                </span>
                <span className='text-sm flex gap-2 items-center text-grey-600 dark:text-grey-300'>
                    <ImLocation className='text-lime-600 dark:text-limegreen-950' size={18} />
                    Somewhere in the world
                </span>
            </div>
            <hr className='w-full border-grey-200 dark:border-grey-800' />
            <div className='w-full flex flex-col md:flex-row items-center justify-between bg-white-4 dark:bg-grey-950 rounded-2xl md:rounded-full border p-4 border-grey-200 dark:border-grey-700 gap-4 w-full'>
                <span className='flex gap-2'>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-limegreen-950 hover:bg-limegreen-900 text-grey-950 hover:scale-105 transition-all duration-200" aria-label="Facebook">
                        <FaFacebookF size={14} />
                    </a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-limegreen-950 hover:bg-limegreen-900 text-grey-950 hover:scale-105 transition-all duration-200" aria-label="Twitter">
                        <FaXTwitter size={14} />
                    </a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-limegreen-950 hover:bg-limegreen-900 text-grey-950 hover:scale-105 transition-all duration-200" aria-label="LinkedIn">
                        <FaLinkedinIn size={14} />
                    </a>
                </span>
                <span className='text-xs text-grey-500 dark:text-grey-400 font-medium' >YourBank All Rights Reserved</span>
                <span className='text-xs text-grey-500 dark:text-grey-400 font-medium' >Privacy | Terms of Services</span>
            </div>
        </footer>
    )
}

export default Footer
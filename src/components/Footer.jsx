import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPhone, FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { ImLocation } from "react-icons/im";




const Footer = () => {
    return (
        <footer className='w-full flex text-white gap-5 relative flex-col justify-center items-center py-6 bg-grey-900  mt-20'>
            <Image src={'/images/logo.png'} width={150} height={100} alt='pattern' />
            <div className="flex gap-5">
                {['home', 'careers', 'about', 'security']?.map((i) => <Link key={i} href={`/${i}`} className="capitalize cursor-pointer">{i}</Link>)}
            </div>
            <hr className='border border-grey-800' />
            <div className="w-full flex flex-wrap justify-center gap-5">
                <span className='text-sm flex gap-2 items-center '>
                    <MdEmail className='text-limegreen-950' size={20} />
                    hello@yourbank.com
                </span>
                <span className='text-sm flex gap-2 items-center '>
                    <FaPhone className='text-limegreen-950' size={20} />
                    +91 91813 23 2309
                </span>
                <span className='text-sm flex gap-2 items-center '>
                    <ImLocation className='text-limegreen-950' size={20} />
                    Somewhere in the world
                </span>

            </div>
            <hr className='border-grey-800' />
            <div className='w-full flex flex-col md:flex-row items-center md:justify-between bg-grey-950 mx-10 rounded-2xl md:rounded-full border p-4 border-grey-700 gap-3'>
                <span className='flex gap-2 -mt-8 md:mt-0'>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-limegreen-950 text-grey-950">
                        <FaFacebookF />
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-limegreen-950 text-grey-950">
                        <FaXTwitter />
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-limegreen-950 text-grey-950">
                        <FaLinkedinIn />
                    </span>
                </span>
                <span className='text-xs text-grey-200' >YourBank All Rights Reserved</span>
                <span className='text-xs text-grey-200' >Privacy | Terms of Services</span>
            </div>
        </footer>
    )
}

export default Footer
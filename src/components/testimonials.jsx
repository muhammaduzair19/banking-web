'use client'
import Image from 'next/image'
import { useState } from 'react'
import { testimonials } from '../app/utils/data';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Testimonails = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const prevReview = () => {
        if (currentReview == 0) {
            setCurrentReview(testimonials.length - 1)
        } else {
            setCurrentReview((prev) => prev - 1)
        }
    }

    const nextReview = () => {
        if (currentReview == testimonials.length - 1) {
            setCurrentReview(0)
        } else {
            setCurrentReview((prev) => prev + 1)
        }
    }

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className='w-full max-w-2xl p-8 md:p-12 bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-2xl flex flex-col items-center gap-6 text-center shadow-sm dark:shadow-none transition-colors duration-300'>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-limegreen-950/20 dark:bg-limegreen-950/10 text-lime-600 dark:text-limegreen-950">
                    <Image src='/pattern/commas.png' width={20} height={20} alt="commas" className="dark:invert-0 invert" />
                </span>
                <p className="text-grey-600 dark:text-grey-300 text-base md:text-lg italic leading-relaxed">
                    &ldquo;{testimonials[currentReview]?.review}&rdquo;
                </p>
                <p className="text-lime-600 dark:text-limegreen-950 font-bold text-sm uppercase tracking-wider">
                    {testimonials[currentReview]?.name}
                </p>
            </div>
            <div className='flex gap-4'>
                <button 
                    onClick={prevReview}
                    className="bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 hover:bg-grey-50 dark:hover:bg-grey-800 p-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 text-lime-600 dark:text-limegreen-950 shadow-sm hover:shadow-md"
                    aria-label="Previous Review"
                >
                    <HiOutlineArrowLeft size={20} />
                </button>
                <button 
                    onClick={nextReview}
                    className="bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 hover:bg-grey-50 dark:hover:bg-grey-800 p-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 text-lime-600 dark:text-limegreen-950 shadow-sm hover:shadow-md"
                    aria-label="Next Review"
                >
                    <HiOutlineArrowRight size={20} />
                </button>
            </div>
        </div>
    )
}

export default Testimonails
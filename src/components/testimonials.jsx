'use client'
import Image from 'next/image'
import { useState } from 'react'
import { testimonials } from '../app/utils/data';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';


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
        <div className="flex flex-col items-center gap-5 w-full">
            <div className='w-full p-4 bg-grey-900 border border-grey-800 rounded-xl flex flex-col items-center gap-5 text-center'>
                <span className="flex items-center justify-center">
                    <Image src='/pattern/commas.png' width={30} height={100} alt="commas" />
                </span>
                <p className="text-grey-200 text-sm">
                    {testimonials[currentReview]?.review}
                </p>
                <p className="text-limegreen-950">
                    {testimonials[currentReview]?.name}
                </p>
            </div>
            <div className=' text-limegreen-950 flex gap-5'>
                <span className="bg-grey-900 border border-grey-800 p-2 rounded-full cursor-pointer" onClick={prevReview}>
                    <HiOutlineArrowSmLeft />
                </span>
                <span className="bg-grey-900 border border-grey-800 p-2 rounded-full cursor-pointer" onClick={nextReview}>
                    <HiOutlineArrowSmRight />
                </span>
            </div>
        </div>
    )
}

export default Testimonails
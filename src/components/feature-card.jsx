import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const FeatureCard = ({ 
    title = "24/7 Account Access", 
    description = "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease." 
}) => {
    return (
        <div className='w-full p-8 flex flex-col gap-4 bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300'>
            <div className='flex justify-between w-full items-center'>
                <p className='text-lg font-semibold text-grey-900 dark:text-white'>{title}</p>
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-limegreen-950/20 dark:bg-limegreen-950/10 text-lime-600 dark:text-limegreen-950">
                    <MdArrowOutward size={18}/>
                </span>
            </div>
            <p className='text-grey-600 dark:text-grey-300 text-sm leading-relaxed'>
                {description}
            </p>
        </div>
    )
}

export default FeatureCard
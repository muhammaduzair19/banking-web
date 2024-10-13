import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const FeatureCard = () => {
    return (
        <div className='w-full p-10  flex flex-col gap-3 bg-grey-900 border border-grey-800 rounded-md'>
            <div className='flex justify-between w-full items-center'>
                <p className='text-lg'>24/7 Account Access</p>
                <MdArrowOutward className='text-limegreen-950'  size={20}/>
            </div>
            <p className='text-grey-200 text-sm'>
                Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.
            </p>
        </div>
    )
}

export default FeatureCard
import React from 'react'
import { TbBriefcaseFilled } from "react-icons/tb";
import Icon from './icon'

const Badge = ({ 
    icon = <TbBriefcaseFilled />, 
    title = "Managing Personal Finances" 
}) => {
    return (
        <div className='w-full p-5 flex items-center text-center justify-center flex-col bg-white-4 dark:bg-grey-950 rounded-2xl border border-grey-200 dark:border-grey-800 z-10 shadow-sm dark:shadow-none transition-all duration-300 hover:scale-[1.02]'>
            <Icon icon={icon} />
            <h3 className="text-sm font-semibold text-grey-900 dark:text-white mt-3">
                {title}
            </h3>
        </div>
    )
}

export default Badge
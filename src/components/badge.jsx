import React from 'react'
const { TbBriefcaseFilled } = require("react-icons/tb");
import Icon from './icon'

const Badge = () => {
    return (
        <div className='w-full p-4 flex items-center text-center py-6 justify-center flex-col bg-grey-950 rounded-2xl border border-grey-800 z-10'>
            <Icon icon={<TbBriefcaseFilled />} />
            <h3>
                Managing Personal Finances
            </h3>
        </div>
    )
}

export default Badge
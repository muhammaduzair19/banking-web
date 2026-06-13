'use client'
import Icon from "./icon.jsx"

const ProductCard = ({ title, description, icon }) => {
    return (
        <div data-aos="zoom-in" className='w-full flex flex-col items-center text-center p-8 bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300 hover:scale-[1.01] gap-4' >
            <Icon icon={icon} />
            <h3 className='font-semibold text-xl text-grey-900 dark:text-white'>{title}</h3>
            <p className='text-grey-600 dark:text-grey-300 text-sm leading-relaxed'>
                {description}
            </p>
        </div>
    )
}

export default ProductCard
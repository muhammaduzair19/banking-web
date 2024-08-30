'use client'
import Icon from "./icon.jsx"

const ProductCard = ({ title, description,icon }) => {

    return (
        <div data-aos="zoom-in" className='w-full flex flex-col items-center gap-2  border-b border-grey-600 py-5' >
            <Icon icon={icon} />
            <h3 className='font-semibold text-xl'>{title}</h3>
            <p className='text-center text-grey-200'>
                {description}
            </p>
        </div>
    )
}

export default ProductCard
const ValueCard = ({ title, description }) => {
    return (
        <div className='flex flex-col px-6 py-2 border-l-2 border-lime-600 dark:border-limegreen-950 gap-2'>
            <h2 className='text-2xl text-grey-900 dark:text-white font-semibold'>{title}</h2>
            <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>
                {description}
            </p>
        </div>
    )
}

export default ValueCard
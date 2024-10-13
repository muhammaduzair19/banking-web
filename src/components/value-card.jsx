const ValueCard = ({ title, description }) => {
    return (
        <div className='flex flex-col px-5 py-1 border-l border-limegreen-950'>
            <h2 className='text-2xl text-grey-600 font-semibold'>{title}</h2>
            <p className='text-sm text-grey-200'>
                {description}
            </p>
        </div>
    )
}

export default ValueCard
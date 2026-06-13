
const Percent = ({ percentage, name }) => {
    return (
        <div className='flex flex-col justify-center items-center text-center gap-1'>
            <p className='text-4xl text-lime-600 dark:text-limegreen-950 font-bold transition-colors'>{percentage}</p>
            <p className='text-xs font-semibold text-grey-600 dark:text-grey-300 transition-colors uppercase tracking-wider'>{name}</p>
        </div>
    )
}

export default Percent
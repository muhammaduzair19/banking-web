
const Percent = ({ percentage, name }) => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <p className='text-4xl text-limegreen-950 font-bold'>{percentage}</p>
            <p className='text-grey-200'>{name}</p>
        </div>
    )
}

export default Percent
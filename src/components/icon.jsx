

const Icon = ({ icon }) => {
    const Component = () => icon;
    return (
        <div className='rounded-full p-2 bg-gradient-to-t to-limegreen-800/10 from-transparent'>
            <span className='text-limegreen-950 text-2xl p-2 rounded-full flex items-center justify-center bg-gradient-to-t to-limegreen-900/20 from-transparent border border-limegreen-900/25 '>
                <Component />
            </span>
        </div>
    )
}

export default Icon



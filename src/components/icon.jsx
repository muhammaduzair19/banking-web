

const Icon = ({ icon }) => {
    const Component = () => icon;
    return (
        <div className='rounded-full p-2 bg-gradient-to-t to-lime-500/10 dark:to-limegreen-800/10 from-transparent transition-colors'>
            <span className='text-lime-600 dark:text-limegreen-950 text-2xl p-2 rounded-full flex items-center justify-center bg-gradient-to-t to-lime-500/20 dark:to-limegreen-900/20 from-transparent border border-lime-500/25 dark:border-limegreen-900/25 transition-colors'>
                <Component />
            </span>
        </div>
    )
}

export default Icon



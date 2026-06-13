import Icon from './icon'

const SecurityCard = ({ icon, title, description }) => {
    return (
        <div className='w-full border rounded-2xl p-6 md:p-8 bg-gradient-to-r from-lime-500/[0.04] via-white to-white dark:from-limegreen-950/[0.03] dark:via-grey-900 dark:to-grey-900 border-grey-200 dark:border-grey-800 shadow-sm dark:shadow-none transition-all duration-300 hover:scale-[1.01]'>
            <div className='flex items-center gap-4'>
                <Icon icon={icon} />
                <h3 className='font-semibold text-xl text-grey-900 dark:text-white'>{title}</h3>
            </div>
            <p className='text-grey-600 dark:text-grey-300 text-sm leading-relaxed mt-5'>
                {description}
            </p>
        </div>
    )
}

export default SecurityCard
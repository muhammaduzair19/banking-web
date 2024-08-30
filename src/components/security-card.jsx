import Icon from './icon'

const SecurityCard = ({ icon, title, description }) => {
    return (
        <div className='w-full bg-grey-900/10 border border-grey-700 rounded-xl p-4 md:p-10  bg-gradient-to-r via-45%x from-limegreen-950/[0.06] via-grey-900 to-grey-900'>
            <div className='flex items-center gap-3'>
                <Icon icon={icon} />
                <h3 className='font-semibold text-xl'>{title}</h3>
            </div>
            <p className='text-grey-200 text-sm mt-5'>
                {description}
            </p>
        </div>
    )
}

export default SecurityCard
import Image from "next/image"

const AboutCard = ({ image, title, location, date, description }) => (
    <div className='w-full p-6 flex flex-col gap-5 bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-3xl shadow-sm dark:shadow-none transition-colors duration-300'>
        <div className='w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-sm'>
            <Image src={image} fill alt='press release' className='object-cover' />
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='text-lg md:text-xl font-bold text-grey-900 dark:text-white leading-snug'>{title}</h3>
            <div className='flex flex-wrap gap-2.5'>
                <span className='text-xs py-1.5 px-4 text-grey-600 dark:text-grey-300 bg-white-2 dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-full font-medium'>Location: {location}</span>
                <span className='text-xs py-1.5 px-4 text-grey-600 dark:text-grey-300 bg-white-2 dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-full font-medium'>Date: {date}</span>
            </div>
            <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed mt-2'>
                {description}
            </p>
        </div>
    </div>
)

export default AboutCard
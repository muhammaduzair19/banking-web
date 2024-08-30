import Image from "next/image"

const AboutCard = ({ image, title, location, date, description }) => (
    <div className='w-full min-h-[30rem] p-5 flex flex-col gap-4 bg-grey-900 border border-grey-800 rounded-3xl'>
        <div className='w-full h-1/2'>
            <Image src={image} height='200' width='200' alt='ahs' className='w-full h-full object-fill' />
        </div>
        <div className='flex flex-col gap-4 mt-3 md:mt-6'>
            <p className='text-md md:text-lg'>{title}</p>
            <div className='flex flex-col gap-3 md:flex-row'>
                <span className='text-center text-sm py-2 px-4 text-grey-200 bg-grey-950 border border-grey-800 rounded-3xl'>Location: {location}</span>
                <span className='text-center text-sm py-2 px-4 text-grey-200 bg-grey-950 border border-grey-800 rounded-3xl'>Date: {date}</span>
            </div>
            <p className='text-sm text-grey-200'>
                {description}
            </p>
        </div>
    </div>
)



export default AboutCard
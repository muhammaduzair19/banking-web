'use client';
import Image from "next/image"
import AboutCard from "@/components/about-card";
import { pressRelease } from "../utils/data";

const About = () => {
    return (
        <main className="space-y-20 pt-10">
            {/* Hero Section */}
            <section className="w-full relative py-6 text-grey-900 dark:text-white">
                <div className='w-full bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-3xl relative overflow-hidden shadow-sm dark:shadow-none'>
                    <Image src='/pattern/dotted3.png' width={200} height={200} className="absolute top-0 right-0 opacity-40 dark:opacity-100" alt='dotted pattern' />
                    
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-8 z-10 relative'>
                        <div className='w-full lg:w-1/2 z-10'>
                            <Image src={'/images/about.png'} width={600} height={400} alt='about hero' className='w-full h-auto object-cover rounded-2xl shadow-md dark:shadow-none' />
                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4'>
                            <p className='text-sm text-lime-600 dark:text-limegreen-950 font-bold uppercase tracking-wider'>Welcome to YourBank</p>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-grey-900 dark:text-white'>Where Banking Meets <span className='text-lime-600 dark:text-limegreen-950'>Excellence!</span></h1>
                            <p className='text-grey-600 dark:text-grey-300 text-sm md:text-base leading-relaxed mt-2'>
                                At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start'>
                <div className='w-full text-center lg:text-start flex flex-col gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold text-lime-600 dark:text-limegreen-950'>Mission & Vision</h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development.</p>
                </div>
                
                <div className='w-full flex flex-col gap-12'>
                    {/* Mission */}
                    <div className='w-full bg-white dark:bg-grey-900/40 border border-grey-200 dark:border-grey-800/60 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 shadow-sm dark:shadow-none'>
                        <div className='w-72 h-64 rounded-[20px] bg-white-2 dark:bg-grey-850 overflow-hidden relative flex justify-center border-b-2 border-lime-500 dark:border-limegreen-950 items-center flex-shrink-0'>
                            <Image src='/images/mv-1.png' height={300} width={200} alt='mv' className="z-20 w-full h-full object-cover" />
                            <Image src='/pattern/rdotted.png' width={200} height={200} className="w-full min-h-full bg-inherit absolute z-10 h-full opacity-40 dark:opacity-100" alt='pattern' />
                        </div>
                        <div className='flex flex-col gap-4 text-center md:text-left'>
                            <p className='text-2xl font-bold text-grey-900 dark:text-white'>Mission</p>
                            <p className='text-grey-600 dark:text-grey-300 text-sm leading-relaxed'>
                                At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className='w-full bg-white dark:bg-grey-900/40 border border-grey-200 dark:border-grey-800/60 rounded-3xl p-6 md:p-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 shadow-sm dark:shadow-none'>
                        <div className='flex flex-col gap-4 text-center md:text-left'>
                            <p className='text-2xl font-bold text-grey-900 dark:text-white'>Vision</p>
                            <p className='text-grey-600 dark:text-grey-300 text-sm leading-relaxed'>
                                Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
                            </p>
                        </div>
                        <div className='w-72 h-64 rounded-[20px] bg-white-2 dark:bg-grey-850 overflow-hidden relative flex justify-center border-b-2 border-lime-500 dark:border-limegreen-950 items-center flex-shrink-0'>
                            <Image src='/images/mv-2.png' height={300} width={200} alt='mv' className="z-20 w-full h-full object-cover" />
                            <Image src='/pattern/rdotted.png' width={200} height={200} className="w-full min-h-full bg-inherit absolute z-10 h-full opacity-40 dark:opacity-100" alt='pattern' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col py-10'>
                <div className='w-full text-center lg:text-start flex flex-col gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold text-lime-600 dark:text-limegreen-950'>Press Releases</h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {pressRelease?.map((i) => (
                        <AboutCard key={i.id} image={i.image} title={i.title} description={i.description} date={i.date} location={i.location} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default About




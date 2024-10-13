'use client';
import Image from "next/image"
import AboutCard from "@/components/about-card";
import { pressRelease } from "../utils/data";

const About = () => {
    return (
        <main>
            <section className="w-full relative py-6 text-white">
                <div className='w-full bg-grey-900 rounded-2xl relative'>
                    <Image src='/pattern/dotted3.png' width={200} height={200} className="absolute top-0 right-0" alt='dotten pattern' />
                    <div className='w-full flex flex-col lg:flex-row-reverse justify-md:end py-6 px-5 md:p-5 z-10 '>
                        <div className='w-full lg:w-1/2 z-10'>
                            <Image src={'/images/about.png'} width={600} height={400} alt='security' className='md:w-full md:self-end' />
                        </div>
                        <div className='w-full lg:w-1/2 -mt-32 md:-mt-0 bg-grey-950 py-6 rounded-3xl px-4 md:rounded-none p-0 md:p-10 lg:p-14 md:mr-14 lg:-mr-24 z-20  flex justify-center md:justify-normal md:items-start items-center md:text-left md:h-fit text-center flex-col md:rounded-br-3xl' >
                            <p className='py-2 text-sm'>Welcome to YourBank.</p>
                            <h1 className='text-3xl md:text-4xl font-semibold'>Where Banking Meets <span className='text-limegreen-950 '>Excellence!</span></h1>
                            <p className='text-grey-200 text-sm mt-5'>
                                At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full min-h-screen text-white space-y-5 flex flex-col items-center md:items-start'>
                <div className='w-full text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-limegreen-950'>Mission & Vision</h1>
                    <p className='text-sm text-grey-200'>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development.</p>
                </div>
                <div className='w-full flex flex-col gap-20 '>
                    <div className='w-full flex flex-col md:flex-row items-center gap-10 md:gap-20'>
                        <div className='w-80 h-72 rounded-t-[30px] px-5 pt-5 bg-grey-800 overflow-hidden relative flex justify-center border-b border-lime-400 items-center'>
                            <Image src='/images/mv-1.png' height={300} width={200} alt='mv' className="z-20 w-full h-full" />
                            <Image src='/pattern/rdotted.png' width={200} height={200} className="w-full min-h-full bg-inherit absolute z-10 h-full bg-blend-color-burn overflow-hidden" alt='dotten pattern' />
                        </div>
                        <div className='w-full md:w-3/4 flex flex-col gap-4 text-center md:text-start'>
                            <p className='text-3xl '>Mission</p>
                            <p className='text-grey-200 text-sm'>
                                At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20'>
                        <div className='w-full md:w-3/4 flex flex-col gap-4 text-center md:text-start'>
                            <p className='text-3xl '>Vision</p>
                            <p className='text-grey-200 text-sm'>
                                Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
                            </p>
                        </div>
                        <div className='w-80 h-72 rounded-t-[30px] px-5 pt-5 bg-grey-800 overflow-hidden relative flex justify-center border-b border-lime-400 items-center'>
                            <Image src='/images/mv-2.png' height={300} width={200} alt='mv' className="z-20 w-full h-full" />
                            <Image src='/pattern/rdotted.png' width={200} height={200} className="w-full min-h-full bg-inherit absolute z-10 h-full bg-blend-color-burn overflow-hidden" alt='dotten pattern' />
                        </div>
                    </div>
                </div>

            </section>

            <section className='w-full min-h-screen text-white space-y-6 flex flex-col py-10'>
                <div className='w-full text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-limegreen-950'>Press Releases</h1>
                    <p className='text-sm text-grey-200'>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        pressRelease?.map((i) => (
                            <AboutCard key={i.id} image={i.image} title={i.title} description={i.description} date={i.date} location={i.location} />)
                        )
                    }

                </div>
            </section>
        </main>
    )
}

export default About




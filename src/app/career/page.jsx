'use client';
import Image from "next/image"
import { benefits, FAQs, jobOpenings, values } from "../utils/data"
import { PrimaryBtn, SecondaryBtn } from "@/components/btn";
import ValueCard from "@/components/value-card";
import SecurityCard from "@/components/security-card";
import JobCard from "@/components/job-card";
import QuestionCard from "@/components/question-card";


const Career = () => {
    return (
        <main>
            <section className="w-full relative py-6 text-white">
                <div className='w-full bg-grey-900 rounded-2xl relative'>
                    <Image src='/pattern/dotted3.png' width={200} height={200} className="absolute top-0 right-0" alt='dotten pattern' />
                    <div className='w-full flex flex-col md:flex-row-reverse py-6 px-5 md:p-5 z-10 '>
                        <div className='w-full md:w-1/2 z-10'>
                            <Image src={'/images/career.png'} width={600} height={400} alt='security' className='md:w-full md:self-end' />
                        </div>
                        <div className='w-full md:w-1/2 bg-grey-950 py-6 rounded-3xl px-4 md:rounded-none p-0 md:p-10 lg:p-14 md:mr-14 lg:-mr-24 z-20 -mt-20 flex justify-center md:justify-normal md:items-start items-center md:text-left md:h-fit text-center flex-col md:mt-0 md:rounded-br-3xl' >
                            <h1 className='text-3xl md:text-4xl font-semibold'>Welcome to <span className='text-limegreen-950 '>YourBank</span> Careers!</h1>
                            <p className='text-grey-200 text-sm mt-5'>
                                Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full relative py-6 text-white">
                <div className='text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Our <span className='text-limegreen-950 '>Values</span></h1>
                    <p className='text-sm text-grey-200 '>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                    {values?.map((i) => <ValueCard key={i.id} title={i.title} description={i.description} />)}
                </div>
            </section>

            <section className="w-full mt-10 min-h-screen relative py-6 text-white">
                <div className='text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Our <span className='text-limegreen-950 '>Benefits</span></h1>
                    <p className='text-sm text-grey-200 '>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                    {benefits?.map((i) => <SecurityCard key={i?.id} icon={i.icon} title={i.title} description={i.description} />)}
                </div>
            </section>
            <section className="w-full mt-10 min-h-screen relative py-6 text-white">
                <div className='text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-limegreen-950'>Job Openings</h1>
                    <p className='text-sm text-grey-200 '>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                    {
                        jobOpenings?.map((job, idx) => (<JobCard key={idx + job?.id}  {...job} />))
                    }

                </div>
            </section>
            <section className='w-full text-white space-y-5 flex flex-col items-center md:items-start'>
                <div className='w-full text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold'><span className='text-limegreen-950 '>Frequently</span> Asked Questions</h1>
                    <p className='text-sm text-grey-200'>Still you have any questions? Contact our Team via support@yourbank.com</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {FAQs?.map(({ question, answer }, idx) => (<QuestionCard key={idx + question} question={question} answer={answer} />))}
                </div>
                <SecondaryBtn text={`Load More FAQ's`} classes={'self-center'} />
            </section>
            <section className="w-full mt-10 text-white space-y-5 flex flex-col items-center md:items-start">
                <div className="relative flex flex-col text-center gap-4 rounded-2xl bg-grey-900 border border-grey-800 p-8">
                    <Image src={'/pattern/dotted2.png'} width={200} height={100} alt='pattern' className='absolute top-0 left-0' />
                    <h1 className='text-3xl md:text-4xl font-semibold'>
                        Start your financial journey with <span className='text-limegreen-950'>
                            YourBank today!
                        </span>
                    </h1>
                    <p className="text-sm text-grey-200">
                        Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.
                    </p>
                    <PrimaryBtn text={'Open Account'} />
                </div>
            </section>
        </main>
    )
}

export default Career





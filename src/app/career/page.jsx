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
        <main className="space-y-20 pt-10">
            {/* Hero Section */}
            <section className="w-full relative py-6 text-grey-900 dark:text-white">
                <div className='w-full bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-3xl relative overflow-hidden shadow-sm dark:shadow-none'>
                    <Image src='/pattern/dotted3.png' width={200} height={200} className="absolute top-0 right-0 opacity-40 dark:opacity-100" alt='dotted pattern' />
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-8 z-10 relative'>
                        <div className='w-full lg:w-1/2 z-10'>
                            <Image src={'/images/career.png'} width={600} height={400} alt='career hero' className='w-full h-auto object-cover rounded-2xl shadow-md dark:shadow-none' />
                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4' >
                            <p className='text-sm text-lime-600 dark:text-limegreen-950 font-bold uppercase tracking-wider'>Careers at YourBank</p>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-grey-900 dark:text-white'>Welcome to <span className='text-lime-600 dark:text-limegreen-950'>YourBank</span> Careers!</h1>
                            <p className='text-grey-600 dark:text-grey-300 text-sm md:text-base leading-relaxed mt-2'>
                                Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start">
                <div className='text-center lg:text-start flex flex-col gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Our <span className='text-lime-600 dark:text-limegreen-950'>Values</span></h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6'>
                    {values?.map((i) => <ValueCard key={i.id} title={i.title} description={i.description} />)}
                </div>
            </section>

            {/* Our Benefits */}
            <section className="w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start">
                <div className='text-center lg:text-start flex flex-col gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Our <span className='text-lime-600 dark:text-limegreen-950'>Benefits</span></h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6'>
                    {benefits?.map((i) => <SecurityCard key={i?.id} icon={i.icon} title={i.title} description={i.description} />)}
                </div>
            </section>

            {/* Job Openings */}
            <section className="w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start">
                <div className='text-center lg:text-start flex flex-col gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold text-lime-600 dark:text-limegreen-950'>Job Openings</h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6'>
                    {jobOpenings?.map((job, idx) => (<JobCard key={idx + job?.id} {...job} />))}
                </div>
            </section>

            {/* FAQs */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start'>
                <div className='w-full text-center lg:text-start flex flex-col gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold'><span className='text-lime-600 dark:text-limegreen-950'>Frequently</span> Asked Questions</h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Still have questions? Contact our Team via support@yourbank.com</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                    {FAQs?.map(({ question, answer }, idx) => (<QuestionCard key={idx + question} question={question} answer={answer} />))}
                </div>
                <SecondaryBtn text={`Load More FAQ's`} classes={'self-center'} />
            </section>

            {/* CTA */}
            <section className="w-full text-grey-900 dark:text-white flex flex-col items-center py-6">
                <div className="relative w-full flex flex-col text-center items-center gap-6 rounded-3xl bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 p-8 md:p-16 overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
                    <Image src={'/pattern/dotted2.png'} width={200} height={100} alt='pattern' className='absolute top-0 left-0 opacity-40 dark:opacity-100' />
                    <h2 className='text-3xl md:text-4xl font-bold max-w-2xl leading-snug z-10'>
                        Start your financial journey with <span className='text-lime-600 dark:text-limegreen-950'>YourBank today!</span>
                    </h2>
                    <p className="text-sm text-grey-600 dark:text-grey-300 max-w-2xl leading-relaxed z-10">
                        Join our team and help shape the future of fintech. Explore open roles or submit your resume for future consideration.
                    </p>
                    <PrimaryBtn text={'Open Account'} />
                </div>
            </section>
        </main>
    )
}

export default Career





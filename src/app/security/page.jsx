'use client';
import Image from "next/image"
import { FAQs, security } from "../utils/data"
import { SecondaryBtn, PrimaryBtn } from "@/components/btn";
import QuestionCard from "@/components/question-card";
import SecurityCard from "@/components/security-card";

const Security = () => {
    return (
        <main className="space-y-20 pt-10">
            {/* Hero Section */}
            <section className="w-full relative py-6 text-grey-900 dark:text-white">
                <div className='w-full bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-3xl relative overflow-hidden shadow-sm dark:shadow-none'>
                    <Image src='/pattern/dotted3.png' width={200} height={200} className="absolute top-0 right-0 opacity-40 dark:opacity-100" alt='dotted pattern' />
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-8 z-10 relative'>
                        <div className='w-full lg:w-1/2 z-10'>
                            <Image src={'/images/security.png'} width={600} height={400} alt='security hero' className='w-full h-auto object-cover rounded-2xl shadow-md dark:shadow-none' />
                        </div>
                        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4' >
                            <p className='text-sm text-lime-600 dark:text-limegreen-950 font-bold uppercase tracking-wider'>Security First</p>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-grey-900 dark:text-white'>Your Security is Our <span className='text-lime-600 dark:text-limegreen-950'>Top Priority</span></h1>
                            <p className='text-grey-600 dark:text-grey-300 text-sm md:text-base leading-relaxed mt-2'>
                                At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Protect You */}
            <section className="w-full text-grey-900 dark:text-white flex flex-col gap-8">
                <div className='flex flex-col w-full text-center lg:text-start gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold'>How We <span className='text-lime-600 dark:text-limegreen-950'>Protect You</span></h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                    {security?.map(({ icon, title, description }, idx) => (
                        <SecurityCard key={idx + title} icon={icon} title={title} description={description} />
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start'>
                <div className='w-full text-center lg:text-start flex flex-col gap-3 max-w-3xl'>
                    <h1 className='text-3xl md:text-4xl font-bold'><span className='text-lime-600 dark:text-limegreen-950'>Frequently</span> Asked Questions</h1>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Still have questions? Contact our Team via support@yourbank.com</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                    {FAQs?.map(({ question, answer }, idx) => (
                        <QuestionCard key={idx + question} question={question} answer={answer} />
                    ))}
                </div>
                <SecondaryBtn text={`Load More FAQ's`} classes={'self-center'} />
            </section>
        </main>
    )
}

export default Security
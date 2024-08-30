'use client';
import Image from "next/image"
import { FAQs, security } from "../utils/data"
import { SecondaryBtn } from "../../components/btn";
import QuestionCard from "../../components/question-card";
import SecurityCard from "../../components/security-card";


const Security = () => {
    return (
        <main>
            <section className="w-full relative py-6 text-white">
                <div className='w-full bg-grey-900 rounded-2xl relative'>
                    <Image src='/pattern/dotted3.png' width={200} height={200} className="absolute top-0 right-0" alt='dotten pattern' />
                    <div className='w-full flex flex-col md:flex-row-reverse py-6 px-5 md:p-5 z-10 '>
                        <div className='w-full md:w-1/2 z-10'>
                            <Image src={'/images/security.png'} width={600} height={400} alt='security' className='md:w-full md:self-end' />
                        </div>
                        <div className='w-full md:w-1/2 bg-grey-950 py-6 rounded-3xl px-4 md:rounded-none p-0 md:p-10 lg:p-14 md:mr-14 lg:-mr-24 z-20 -mt-20 flex justify-center md:justify-normal md:items-start items-center md:text-left md:h-fit text-center flex-col md:mt-0 md:rounded-br-3xl' >
                            <h1 className='text-3xl md:text-4xl font-semibold'>Your Security is Our <span className='text-limegreen-950 '>Top Priority</span></h1>
                            <p className='text-grey-200 text-sm mt-5'>
                                At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="w-full min-h-screen relative py-6 text-white flex flex-col gap-5">
                <div className='flex flex-col w-full text-center md:text-start gap-2 md:gap-4'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>How We <span className='text-limegreen-950 '>Protect You</span></h1>
                    <p className='text-sm text-grey-200'>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                    {security?.map(({ icon, title, description }, idx) => (<SecurityCard key={idx + title} icon={icon} title={title} description={description} />))}
                </div>
            </section>
            <section className='w-full mt-10 text-white space-y-5 flex flex-col items-center md:items-start'>
                <div className='w-full text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold'><span className='text-limegreen-950 '>Frequently</span> Asked Questions</h1>
                    <p className='text-sm text-grey-200'>Still you have any questions? Contact our Team via support@yourbank.com</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {FAQs?.map(({ question, answer }, idx) => (<QuestionCard key={idx + question} question={question} answer={answer} />))}
                </div>
                <SecondaryBtn text={`Load More FAQ's`} classes={'self-center'} />

            </section>
        </main>
    )
}

export default Security
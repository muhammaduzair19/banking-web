'use client';
import Image from "next/image"
import { useEffect } from "react";
import { FAQs, products } from "../utils/data";
import { PrimaryBtn, SecondaryBtn } from "@/components/btn";
import { HiCheckBadge, HiCurrencyDollar } from "react-icons/hi2";
import { FaBitcoin, FaEthereum } from "react-icons/fa6";
import { AiFillEuroCircle } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductCard from "@/components/product-card";
import TransactionCard from "@/components/transaction-card";
import BadgeSection from "@/components/badge-section";
import Percent from "@/components/Percent";
import FeatureCard from "@/components/feature-card";
import QuestionCard from "@/components/question-card";
import Testimonials from "@/components/testimonials";



const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <main className='grid grid-cols-1 gap-20'>
            <section className="w-full min-h-screen text-limegreen-950  space-y-5 flex flex-col md:flex-row items-center md:items-start">
                <Image src={'/pattern/dotted.png'} width={200} height={200} className="absolute" alt='dotten pattern' />


                <div data-aos="fade-right" className="w-full flex flex-col py-6 px-5 md:px-0 md:-ml-4 gap-4">
                    <span className="bg-grey-800  self-center px-4 py-2 flex justify-center items-center md:self-start rounded-full text-white gap-2">
                        <HiCheckBadge className="text-limegreen-950 " size={20} />
                        <p className="text-sm">No LLC Required, No Credit Check.</p>
                    </span>
                    <div className="w-full flex flex-col gap-4">
                        <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold leading-normal text-white">Welcome to Your <br /> Bank Empowering Your <br /><span className="text-limegreen-950"> Financial Journey</span></h1>
                        <p className="text-center md:text-left text-white-1">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers&abquo; needs.</p>
                    </div>
                    <PrimaryBtn classes={'md:self-start'} text={'Open Account'} />
                </div>


                <div data-aos="zoom-in" className="w-full relative px-5 py-6 space-y-4 justify-center flex flex-col items-end md:items-center">
                    <Image src={'/pattern/arrows.png'} width={200} height={200} className="absolute top-0 -right-6 -z-20" alt='pattern' />
                    <div className="w-full lg:w-[75%] xl:w-[70%] px-5 flex justify-center -z-50 flex-col text-white py-4 border border-grey-700 bg-grey-950 rounded-md">
                        <div className="w-full flex flex-col gap-3">
                            <h3>Your Transaction</h3>
                            <div className="w-full flex flex-col items-center -space-y-4">
                                <TransactionCard classes={'z-20'} />
                                <TransactionCard classes={'opacity-70 w-[85%] z-10'} />
                                <TransactionCard classes={'opacity-50 w-[70%] -z-0'} />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-3 justify-center">
                            <h3>Money Exchange</h3>
                            <div className="grid grid-cols-2 grid-rows-2 bg-grey-900">
                                <div className="w-full flex justify-start items-center p-4 rounded-tl-lg border border-grey-700">ind</div>
                                <div className="w-full flex justify-start items-center p-4 rounded-tr-lg border border-grey-700">usd</div>
                                <div className="w-full flex justify-start items-center rounded-bl-lg  border border-grey-700">34</div>
                                <div className="w-full flex justify-start items-center rounded-br-lg border border-grey-700">35</div>
                            </div>
                            <button className="w-full rounded-full py-2 bg-limegreen-700/65 text-limegreen-950">Exchange</button>
                        </div>
                    </div>
                    <div className="w-fit px-2 md:px-4  py-2 flex bg-limegreen-700/65 rounded-full items-center  justify-between gap-4">
                        <p className="text-xs text-white-1">Supported Currency</p>
                        <span className="flex items-center gap-1">
                            <span className="w-7 h-7 bg-grey-800 rounded-full flex justify-center items-center">
                                <FaEthereum size={12} />
                            </span>
                            <span className="w-7 h-7  bg-grey-800 rounded-full flex justify-center items-center">
                                <HiCurrencyDollar size={12} />
                            </span>
                            <span className="w-7 h-7  bg-grey-800 rounded-full flex justify-center items-center">
                                <FaBitcoin size={12} />
                            </span>
                            <span className="w-7 h-7  bg-grey-800 rounded-full flex justify-center items-center">
                                <AiFillEuroCircle size={12} />
                            </span>
                        </span>
                    </div>
                </div>
            </section>
            <section data-aos="fade-right" data-aos-duration='3000' className="w-full h-fit text-white space-y-5 flex flex-col items-center md:items-start">
                <div className='w-full flex flex-col md:flex-row md:justify-between items-center gap-5 '>
                    <div className='text-center md:text-start flex flex-col gap-3'>
                        <h1 className='text-3xl md:text-4xl font-semibold'>Our <span className='text-limegreen-950 '>Products</span></h1>
                        <p className='text-sm text-grey-200 '>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                    </div>
                    <div className='w-fit flex bg-grey-900 border border-grey-800 p-3 rounded-full'>
                        <PrimaryBtn text='For Individuals' classes={'text-sm'} />
                        <PrimaryBtn text='Bussiness' classes={'text-sm bg-transparent text-white'} />
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                    {products?.map(({ title, icon, description }) => <ProductCard
                        key={title}
                        icon={icon}
                        title={title}
                        description={description}
                    />)
                    }
                </div>
            </section>
            <section className='w-full min-h-screen text-white space-y-5 flex flex-col items-center md:items-start'>
                <div data-aos="fade-right" className='w-full text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold text-limegreen-950'>Use Cases</h1>
                    <p className='text-sm text-grey-200'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>
                <div className='grid grid-cols-1 gap-10'>

                    <div className='flex flex-col md:flex-row gap-5'>
                        <BadgeSection />
                        <div className='flex flex-col gap-2 md:gap-6 text-center md:text-start md:items-start  md:justify-between py-5'>
                            <h3 className='text-3xl font-bold'>For Individuals</h3>
                            <p className='text-sm text-grey-200'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                            <div className='flex flex-col justify-center items-center gap-5 md:flex-row'>
                                <Percent percentage={'76%'} name={'Secure Retirement Planning'} />
                                <Percent percentage={'76%'} name={'Secure Retirement Planning'} />
                                <Percent percentage={'76%'} name={'Secure Retirement Planning'} />
                            </div>
                            <SecondaryBtn text={'Learn More'} />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row-reverse gap-5'>
                        <BadgeSection />
                        <div className='flex flex-col gap-2 md:gap-6 text-center md:text-start md:items-start md:justify-between py-5'>
                            <h3 className='text-3xl font-bold text-center'>For Individuals</h3>
                            <p className='text-sm text-grey-200'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                                <Percent percentage={'76%'} name={'Secure Retirement Planning'} />
                                <Percent percentage={'76%'} name={'Secure Retirement Planning'} />
                                <Percent percentage={'76%'} name={'Secure Retirement Planning'} />
                            </div>
                            <SecondaryBtn text={'Learn More'} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full  text-white space-y-5 flex flex-col items-center md:items-start'>
                <div className='w-full text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Our <span className='text-limegreen-950 '>Features</span></h1>
                    <p className='text-sm text-grey-200'>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-3 '>
                    <div className='w-full h-fit md:w-1/5 flex flex-col p-4 bg-grey-900 gap-2 rounded-lg border border-grey-800'>
                        <SecondaryBtn text={'Online Banking'} classes={'text-limegreen-950'} />
                        <SecondaryBtn text={'Financial Tools'} />
                        <SecondaryBtn text={'Customer Support'} />
                    </div>


                    <div className='w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-2 md:px-4'>
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                    </div>
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
            <section className='w-full text-white space-y-5 flex flex-col items-center md:items-start'>
                <div className='w-full text-center md:text-start flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Our <span className='text-limegreen-950 '>Testimonials</span></h1>
                    <p className='text-sm text-grey-200'>Still you have any questions? Contact our Team via support@yourbank.com</p>
                </div>
                <Testimonials />
            </section>
            <section className="w-full text-white space-y-5 flex flex-col items-center md:items-start">
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












export default HomePage



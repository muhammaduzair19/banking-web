'use client';

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FAQs, products } from "../utils/data";
import { PrimaryBtn, SecondaryBtn } from "@/components/btn";
import { HiCheckBadge, HiCurrencyDollar } from "react-icons/hi2";
import { FaBitcoin, FaEthereum } from "react-icons/fa6";
import { AiFillEuroCircle } from "react-icons/ai";
import { TbBriefcaseFilled, TbAppsFilled } from "react-icons/tb";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
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

    // Interactive Exchange Widget State
    const [exchangeAmount, setExchangeAmount] = useState("1000");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    const exchangeRates = {
        USD: { INR: 83.5, EUR: 0.92, BTC: 0.000015, USD: 1 },
        INR: { USD: 0.012, EUR: 0.011, BTC: 0.00000018, INR: 1 },
        EUR: { USD: 1.09, INR: 90.76, BTC: 0.000016, EUR: 1 },
        BTC: { USD: 67000, INR: 5594000, EUR: 61500, BTC: 1 }
    };

    const handleConversion = () => {
        const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
        const amt = parseFloat(exchangeAmount) || 0;
        const result = amt * rate;
        if (toCurrency === "BTC") {
            return result.toFixed(6);
        }
        return result.toFixed(2);
    };

    const swapCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    // Dynamic Badges Data
    const individualBadges = [
        { title: "Managing Personal Finances", icon: <TbBriefcaseFilled /> },
        { title: "Saving for Future Goals", icon: <HiCurrencyDollar /> },
        { title: "Homeownership Mortgages", icon: <HiSquare3Stack3D /> },
        { title: "Education Planning", icon: <BsStars /> }
    ];

    const businessBadges = [
        { title: "Business Account Setup", icon: <TbAppsFilled /> },
        { title: "Smart Payroll Solutions", icon: <TbBriefcaseFilled /> },
        { title: "Merchant Processing", icon: <HiCurrencyDollar /> },
        { title: "Commercial Real Estate", icon: <HiSquare3Stack3D /> }
    ];

    const [activeFeatureTab, setActiveFeatureTab] = useState('online');

    return (
        <main className='grid grid-cols-1 gap-20 overflow-x-hidden pt-10'>
            {/* Hero Section */}
            <section className="w-full min-h-screen text-grey-900 dark:text-white space-y-8 flex flex-col lg:flex-row items-center justify-between relative">
                <Image src={'/pattern/dotted.png'} width={200} height={200} className="absolute top-0 left-0 -z-10 opacity-30 dark:opacity-75" alt='dotted pattern' priority />

                <div data-aos="fade-right" className="w-full lg:w-1/2 flex flex-col py-6 gap-6 text-center lg:text-left items-center lg:items-start">
                    <span className="bg-white dark:bg-grey-800 border border-grey-200 dark:border-grey-700 px-4 py-2 flex justify-center items-center rounded-full text-grey-700 dark:text-white gap-2 shadow-sm">
                        <HiCheckBadge className="text-lime-600 dark:text-limegreen-950" size={20} />
                        <p className="text-sm font-medium">No LLC Required, No Credit Check.</p>
                    </span>
                    <div className="w-full flex flex-col gap-4">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-grey-900 dark:text-white">
                            Welcome to YourBank <br /> Empowering Your <br />
                            <span className="text-lime-600 dark:text-limegreen-950 bg-gradient-to-r from-lime-600 to-lime-500 dark:from-limegreen-950 dark:to-limegreen-800 bg-clip-text text-transparent"> Financial Journey</span>
                        </h1>
                        <p className="text-grey-600 dark:text-grey-300 text-base md:text-lg max-w-xl leading-relaxed">
                            At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers&apos; needs.
                        </p>
                    </div>
                    <Link href="/signup">
                        <PrimaryBtn text={'Open Account'} />
                    </Link>
                </div>

                <div data-aos="zoom-in" className="w-full lg:w-1/2 relative px-5 py-6 justify-center flex flex-col items-center lg:items-end">
                    <Image src={'/pattern/arrows.png'} width={200} height={200} className="absolute top-0 right-0 -z-20 opacity-30 dark:opacity-100" alt='pattern' />
                    
                    {/* Floating Dashboard Card */}
                    <div className="w-full max-w-[420px] px-6 py-6 flex flex-col gap-6 border border-grey-200 dark:border-grey-700 bg-white/90 dark:bg-grey-950/90 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-none">
                        {/* Transaction History Stack */}
                        <div className="w-full flex flex-col gap-3">
                            <h3 className="text-sm font-bold text-grey-500 dark:text-grey-400 uppercase tracking-wider text-left">Your Transactions</h3>
                            <div className="w-full flex flex-col items-center -space-y-4">
                                <TransactionCard name="Joel Miller" type="Web Subscription" amount="-$14.99" classes="z-20 shadow-md" />
                                <TransactionCard name="Clara Oswald" type="Salary Deposit" amount="+$3,450.00" classes="opacity-80 w-[92%] z-10" />
                                <TransactionCard name="Mark Smith" type="Money Exchange" amount="-$69.50" classes="opacity-55 w-[84%] z-0" />
                            </div>
                        </div>

                        {/* Interactive Currency Converter */}
                        <div className="w-full flex flex-col gap-3 justify-center">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-grey-500 dark:text-grey-400 uppercase tracking-wider">Money Exchange</h3>
                                <button 
                                    onClick={swapCurrencies}
                                    className="text-xs font-semibold text-lime-600 dark:text-limegreen-950 hover:underline"
                                >
                                    Swap
                                </button>
                            </div>
                            <div className="grid grid-cols-2 bg-white-2 dark:bg-grey-900 border border-grey-200 dark:border-grey-700 rounded-xl overflow-hidden divide-x divide-y divide-grey-200 dark:divide-grey-700">
                                {/* From Currency */}
                                <div className="p-3 flex flex-col gap-1 items-start">
                                    <span className="text-[10px] uppercase font-bold text-grey-400 dark:text-grey-500">From</span>
                                    <select 
                                        value={fromCurrency} 
                                        onChange={(e) => setFromCurrency(e.target.value)}
                                        className="bg-transparent text-sm font-semibold focus:outline-none text-grey-900 dark:text-white cursor-pointer w-full"
                                    >
                                        <option value="USD" className="bg-white dark:bg-grey-900">USD</option>
                                        <option value="EUR" className="bg-white dark:bg-grey-900">EUR</option>
                                        <option value="INR" className="bg-white dark:bg-grey-900">INR</option>
                                        <option value="BTC" className="bg-white dark:bg-grey-900">BTC</option>
                                    </select>
                                </div>
                                {/* From Amount */}
                                <div className="p-3 flex flex-col gap-1 items-end">
                                    <span className="text-[10px] uppercase font-bold text-grey-400 dark:text-grey-500">Amount</span>
                                    <input 
                                        type="number"
                                        value={exchangeAmount}
                                        onChange={(e) => setExchangeAmount(e.target.value)}
                                        className="bg-transparent text-sm font-bold w-full text-right focus:outline-none text-grey-900 dark:text-white border-b border-dashed border-grey-300 dark:border-grey-700"
                                    />
                                </div>
                                {/* To Currency */}
                                <div className="p-3 flex flex-col gap-1 items-start">
                                    <span className="text-[10px] uppercase font-bold text-grey-400 dark:text-grey-500">To</span>
                                    <select 
                                        value={toCurrency} 
                                        onChange={(e) => setToCurrency(e.target.value)}
                                        className="bg-transparent text-sm font-semibold focus:outline-none text-grey-900 dark:text-white cursor-pointer w-full"
                                    >
                                        <option value="INR" className="bg-white dark:bg-grey-900">INR</option>
                                        <option value="USD" className="bg-white dark:bg-grey-900">USD</option>
                                        <option value="EUR" className="bg-white dark:bg-grey-900">EUR</option>
                                        <option value="BTC" className="bg-white dark:bg-grey-900">BTC</option>
                                    </select>
                                </div>
                                {/* Converted Amount */}
                                <div className="p-3 flex flex-col gap-1 items-end bg-grey-50/50 dark:bg-grey-900/30">
                                    <span className="text-[10px] uppercase font-bold text-grey-400 dark:text-grey-500">Result</span>
                                    <span className="text-sm font-bold text-lime-600 dark:text-limegreen-950">
                                        {handleConversion()}
                                    </span>
                                </div>
                            </div>
                            <button className="w-full rounded-full py-2.5 bg-limegreen-950 hover:bg-limegreen-900 dark:hover:bg-[#d8ff66] text-grey-950 font-semibold text-sm shadow-sm transition-all duration-200">
                                Exchange Currencies
                            </button>
                        </div>
                    </div>

                    <div className="w-fit mt-4 px-4 py-2 flex bg-white/70 dark:bg-grey-900/60 border border-grey-200 dark:border-grey-800 rounded-full items-center justify-between gap-4 shadow-sm">
                        <p className="text-xs text-grey-600 dark:text-grey-300 font-medium">Supported Currency</p>
                        <span className="flex items-center gap-1.5">
                            <span className="w-7 h-7 bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-white rounded-full flex justify-center items-center">
                                <FaEthereum size={12} />
                            </span>
                            <span className="w-7 h-7 bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-white rounded-full flex justify-center items-center">
                                <HiCurrencyDollar size={12} />
                            </span>
                            <span className="w-7 h-7 bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-white rounded-full flex justify-center items-center">
                                <FaBitcoin size={12} />
                            </span>
                            <span className="w-7 h-7 bg-grey-100 dark:bg-grey-800 text-grey-700 dark:text-white rounded-full flex justify-center items-center">
                                <AiFillEuroCircle size={12} />
                            </span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section data-aos="fade-up" className="w-full h-fit text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start">
                <div className='w-full flex flex-col lg:flex-row lg:justify-between items-center gap-5'>
                    <div className='text-center lg:text-start flex flex-col gap-3 max-w-2xl'>
                        <h2 className='text-3xl md:text-4xl font-bold'>Our <span className='text-lime-600 dark:text-limegreen-950'>Products</span></h2>
                        <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                    </div>
                    <div className='w-fit flex bg-white-2 dark:bg-grey-900 border border-grey-200 dark:border-grey-800 p-2 rounded-full shadow-sm'>
                        <button className="text-sm font-semibold bg-limegreen-950 text-grey-950 px-5 py-2 rounded-full transition-all">For Individuals</button>
                        <button className="text-sm font-semibold bg-transparent text-grey-600 dark:text-grey-300 px-5 py-2 rounded-full hover:text-grey-900 dark:hover:text-white transition-all">For Businesses</button>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {products?.map(({ title, icon, description }) => (
                        <ProductCard
                            key={title}
                            icon={icon}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </section>

            {/* Use Cases Section */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start'>
                <div data-aos="fade-up" className='w-full text-center lg:text-start flex flex-col gap-3 max-w-2xl'>
                    <h2 className='text-3xl md:text-4xl font-bold text-lime-600 dark:text-limegreen-950'>Use Cases</h2>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>
                
                <div className='w-full flex flex-col gap-12'>
                    {/* For Individuals Use Case */}
                    <div data-aos="fade-up" className='flex flex-col lg:flex-row gap-8 items-center bg-white-3 dark:bg-grey-900/20 p-6 md:p-8 rounded-3xl border border-grey-200 dark:border-grey-800/60'>
                        <BadgeSection items={individualBadges} />
                        <div className='w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start py-4'>
                            <h3 className='text-3xl font-bold text-grey-900 dark:text-white'>For Individuals</h3>
                            <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 w-full'>
                                <Percent percentage={'78%'} name={'Secure Savings'} />
                                <Percent percentage={'85%'} name={'Faster Approval'} />
                                <Percent percentage={'99%'} name={'Customer Support'} />
                            </div>
                            <SecondaryBtn text={'Learn More'} />
                        </div>
                    </div>

                    {/* For Businesses Use Case */}
                    <div data-aos="fade-up" className='flex flex-col lg:flex-row-reverse gap-8 items-center bg-white-3 dark:bg-grey-900/20 p-6 md:p-8 rounded-3xl border border-grey-200 dark:border-grey-800/60'>
                        <BadgeSection items={businessBadges} />
                        <div className='w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start py-4'>
                            <h3 className='text-3xl font-bold text-grey-900 dark:text-white'>For Businesses</h3>
                            <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>For businesses, we provide robust checking and treasury management services to fuel expansion, optimize cash flows, and secure working capital. Our tailored commercial lending solutions empower enterprises to capture opportunities and scale smoothly.</p>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 w-full'>
                                <Percent percentage={'65%'} name={'Cash Flow Increase'} />
                                <Percent percentage={'92%'} name={'Enterprise Growth'} />
                                <Percent percentage={'99.9%'} name={'System Uptime'} />
                            </div>
                            <SecondaryBtn text={'Learn More'} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start'>
                <div className='w-full text-center lg:text-start flex flex-col gap-3 max-w-2xl'>
                    <h2 className='text-3xl md:text-4xl font-bold'>Our <span className='text-lime-600 dark:text-limegreen-950'>Features</span></h2>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                </div>
                
                <div className='w-full flex flex-col lg:flex-row gap-6 items-start'>
                    {/* Interactive Feature Tabs */}
                    <div className='w-full lg:w-1/4 flex flex-col p-4 bg-white dark:bg-grey-900 gap-2 rounded-2xl border border-grey-200 dark:border-grey-800 shadow-sm dark:shadow-none'>
                        <button 
                            onClick={() => setActiveFeatureTab('online')}
                            className={`w-full text-left font-medium px-4 py-3 rounded-xl transition-all duration-200 text-sm ${activeFeatureTab === 'online' ? 'bg-limegreen-950 text-grey-950 font-semibold shadow-sm' : 'text-grey-600 dark:text-grey-300 hover:bg-grey-50 dark:hover:bg-grey-800'}`}
                        >
                            Online Banking
                        </button>
                        <button 
                            onClick={() => setActiveFeatureTab('tools')}
                            className={`w-full text-left font-medium px-4 py-3 rounded-xl transition-all duration-200 text-sm ${activeFeatureTab === 'tools' ? 'bg-limegreen-950 text-grey-950 font-semibold shadow-sm' : 'text-grey-600 dark:text-grey-300 hover:bg-grey-50 dark:hover:bg-grey-800'}`}
                        >
                            Financial Tools
                        </button>
                        <button 
                            onClick={() => setActiveFeatureTab('support')}
                            className={`w-full text-left font-medium px-4 py-3 rounded-xl transition-all duration-200 text-sm ${activeFeatureTab === 'support' ? 'bg-limegreen-950 text-grey-950 font-semibold shadow-sm' : 'text-grey-600 dark:text-grey-300 hover:bg-grey-50 dark:hover:bg-grey-800'}`}
                        >
                            Customer Support
                        </button>
                    </div>

                    <div className='w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {activeFeatureTab === 'online' && (
                            <>
                                <FeatureCard title="24/7 Account Access" description="Access your accounts anytime, anywhere. Check balances, transfer money, and make payments with just a few clicks." />
                                <FeatureCard title="Mobile Banking App" description="Install our secure app on your smartphone to manage transactions, scan checks, and pay merchants on the go." />
                                <FeatureCard title="Paperless Statements" description="Reduce environmental footprint. Receive monthly digital statements and historical transaction records via secure email." />
                                <FeatureCard title="Multi-Device Sync" description="Seamlessly log in from your laptop, tablet, or smartphone and keep all your account records updated in real time." />
                            </>
                        )}
                        {activeFeatureTab === 'tools' && (
                            <>
                                <FeatureCard title="Automatic Budgeting" description="Our system categorizes your expenses automatically to help you understand your monthly cash flow." />
                                <FeatureCard title="Goal Savings Vault" description="Set custom goals, allocate recurring payments, and unlock micro-investments to grow your emergency fund." />
                                <FeatureCard title="Credit Score Tracker" description="Check your credit report updates free of cost. Access advice on improving your score and qualifying for loans." />
                                <FeatureCard title="Investment Planner" description="Get customized portfolios and calculate mortgage estimates based on your income, expenditures, and risk appetite." />
                            </>
                        )}
                        {activeFeatureTab === 'support' && (
                            <>
                                <FeatureCard title="Secure In-App Chat" description="Initiate a secure chat session directly inside online banking. Get connected to a human representative within 2 minutes." />
                                <FeatureCard title="Fraud Alerts Desk" description="Our specialized fraud team works 24/7. Instantly lock cards or report unauthorized transactions with a button press." />
                                <FeatureCard title="Help Center Database" description="Search hundreds of articles, guides, and tutorials detailing features, fee rates, and wire transfer procedures." />
                                <FeatureCard title="Priority Callback" description="Skip the hold queue. Schedule a convenient callback time and our manager will phone you directly." />
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start'>
                <div className='w-full text-center lg:text-start flex flex-col gap-3 max-w-2xl'>
                    <h2 className='text-3xl md:text-4xl font-bold'><span className='text-lime-600 dark:text-limegreen-950'>Frequently</span> Asked Questions</h2>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Still have questions? Contact our Team via support@yourbank.com</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                    {FAQs?.map(({ question, answer }, idx) => (
                        <QuestionCard key={idx + question} question={question} answer={answer} />
                    ))}
                </div>
                <SecondaryBtn text={`Load More FAQ's`} classes={'self-center'} />
            </section>

            {/* Testimonials Section */}
            <section className='w-full text-grey-900 dark:text-white space-y-8 flex flex-col items-center lg:items-start'>
                <div className='w-full text-center lg:text-start flex flex-col gap-3 max-w-2xl'>
                    <h2 className='text-3xl md:text-4xl font-bold'>Our <span className='text-lime-600 dark:text-limegreen-950'>Testimonials</span></h2>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>Hear from our satisfied customers who have chosen YourBank as their trusted financial partner.</p>
                </div>
                <Testimonials />
            </section>

            {/* CTA Section */}
            <section className="w-full text-grey-900 dark:text-white flex flex-col items-center py-6">
                <div className="relative w-full flex flex-col text-center items-center gap-6 rounded-3xl bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 p-8 md:p-16 overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
                    <Image src={'/pattern/dotted2.png'} width={200} height={100} alt='pattern' className='absolute top-0 left-0 opacity-40 dark:opacity-100' />
                    <h2 className='text-3xl md:text-4xl font-bold max-w-2xl leading-snug z-10'>
                        Start your financial journey with <span className='text-lime-600 dark:text-limegreen-950'>YourBank today!</span>
                    </h2>
                    <p className="text-sm text-grey-600 dark:text-grey-300 max-w-2xl leading-relaxed z-10">
                        Join millions of individuals and businesses who trust YourBank for secure, high-yield, and user-friendly digital financial services. Set up your checking account in less than 5 minutes.
                    </p>
                    <Link href="/signup" className="z-10">
                        <PrimaryBtn text={'Open Account'} />
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default HomePage

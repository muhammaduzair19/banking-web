'use client'

import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";

const MenuItem = ['home', 'about', 'career', 'security']

const Navbar = () => {
    const path = usePathname()
    const [isActive, setIsActive] = useState('home');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        if (path) {
            setIsActive(path === '/' ? 'home' : path.replace('/', ''))
        }
    }, [path])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <>
            <nav className="w-full px-6 py-4 bg-white/80 dark:bg-grey-900/80 border border-grey-200 dark:border-grey-800 backdrop-blur-md rounded-full flex justify-between items-center sticky top-5 z-50 shadow-sm dark:shadow-none transition-colors duration-300">
                <Link href="/" className="w-24 xl:w-32 flex items-center">
                    <svg width="118" height="31" viewBox="0 0 118 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M8.0625 15.625L15.5625 8.125L23.0625 15.625L15.5625 23.125L8.0625 15.625Z" fill="#CAFF33" />
                        <path d="M28.0625 10.625L23.0625 15.625V8.125H15.5625L20.5625 3.125H28.0625V10.625Z" fill="#CAFF33" />
                        <path d="M28.0625 20.625L23.0625 15.625V23.125H15.5625L20.5625 28.125H28.0625V20.625Z" fill="#CAFF33" />
                        <path d="M3.0625 20.625L8.0625 15.625V23.125H15.5625L10.5625 28.125H3.0625L3.0625 20.625Z" fill="#CAFF33" />
                        <path d="M3.0625 10.625L8.0625 15.625V8.125H15.5625L10.5625 3.125H3.0625L3.0625 10.625Z" fill="#CAFF33" />
                        <path d="M45.0778 9.125L40.4689 17.2631V22.6243H38.2966V17.2631L33.6877 9.125H36.1622L39.3922 15.1033L42.6033 9.125H45.0778Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                        <path d="M48.9438 22.875C47.5586 22.875 46.3812 22.3865 45.4116 21.4094C44.4419 20.4323 43.9571 19.2302 43.9571 17.8031C43.9571 16.3761 44.4419 15.174 45.4116 14.1969C46.3812 13.2198 47.5586 12.7312 48.9438 12.7312C50.3416 12.7312 51.519 13.2198 52.476 14.1969C53.4456 15.174 53.9305 16.3761 53.9305 17.8031C53.9305 19.2302 53.4456 20.4323 52.476 21.4094C51.519 22.3865 50.3416 22.875 48.9438 22.875ZM46.8471 19.9823C47.4138 20.5608 48.1127 20.8501 48.9438 20.8501C49.7749 20.8501 50.4738 20.5608 51.0404 19.9823C51.6071 19.4038 51.8904 18.6774 51.8904 17.8031C51.8904 16.9289 51.6071 16.2025 51.0404 15.6239C50.4738 15.0454 49.7749 14.7561 48.9438 14.7561C48.1127 14.7561 47.4138 15.0454 46.8471 15.6239C46.2804 16.2025 45.9971 16.9289 45.9971 17.8031C45.9971 18.6774 46.2804 19.4038 46.8471 19.9823Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                        <path d="M62.1406 12.9819H64.1806V22.6243H62.1406V21.3901C61.5236 22.38 60.5477 22.875 59.2129 22.875C58.1299 22.875 57.2547 22.5214 56.5873 21.8143C55.9199 21.1072 55.5862 20.1366 55.5862 18.9024V12.9819H57.6262V18.6902C57.6262 19.4102 57.8151 19.963 58.1928 20.3487C58.5706 20.7344 59.0869 20.9272 59.7417 20.9272C60.4595 20.9272 61.0388 20.7023 61.4795 20.2523C61.9203 19.7894 62.1406 19.0888 62.1406 18.1502V12.9819Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                        <path d="M68.6061 14.6019C69.1224 13.4062 70.092 12.8084 71.515 12.8084V15.0647C70.7342 15.0133 70.0542 15.2061 69.475 15.6432C68.8957 16.0675 68.6061 16.7746 68.6061 17.7646V22.6243H66.5661V12.9819H68.6061V14.6019Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                        <path d="M80.9367 15.6239C81.516 15.9325 81.9693 16.3568 82.2967 16.8967C82.6241 17.4367 82.7878 18.0603 82.7878 18.7674C82.7878 19.873 82.4037 20.7923 81.6356 21.5251C80.8674 22.2579 79.9293 22.6243 78.8211 22.6243H73.1545V9.125H78.4056C79.4886 9.125 80.4015 9.48498 81.1445 10.2049C81.9 10.9121 82.2778 11.7991 82.2778 12.8662C82.2778 14.0362 81.8308 14.9554 80.9367 15.6239ZM78.4056 11.2077H75.3267V14.7561H78.4056C78.8841 14.7561 79.2871 14.589 79.6145 14.2547C79.9419 13.9076 80.1056 13.4833 80.1056 12.9819C80.1056 12.4805 79.9419 12.0627 79.6145 11.7284C79.2871 11.3813 78.8841 11.2077 78.4056 11.2077ZM78.8211 20.5416C79.3249 20.5416 79.7467 20.3616 80.0867 20.0016C80.4393 19.6287 80.6156 19.1788 80.6156 18.6516C80.6156 18.1245 80.4393 17.681 80.0867 17.321C79.7467 16.9482 79.3249 16.7617 78.8211 16.7617H75.3267V20.5416H78.8211Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                        <path d="M92.1234 12.9819H94.1634V22.6243H92.1234V21.2358C91.3552 22.3286 90.2534 22.875 88.8178 22.875C87.5208 22.875 86.4126 22.3865 85.4934 21.4094C84.5741 20.4194 84.1145 19.2173 84.1145 17.8031C84.1145 16.3761 84.5741 15.174 85.4934 14.1969C86.4126 13.2198 87.5208 12.7312 88.8178 12.7312C90.2534 12.7312 91.3552 13.2712 92.1234 14.3512V12.9819ZM87.0045 20.0209C87.5711 20.5994 88.2826 20.8887 89.1389 20.8887C89.9952 20.8887 90.7067 20.5994 91.2734 20.0209C91.84 19.4295 92.1234 18.6902 92.1234 17.8031C92.1234 16.916 91.84 16.1832 91.2734 15.6047C90.7067 15.0133 89.9952 14.7176 89.1389 14.7176C88.2826 14.7176 87.5711 15.0133 87.0045 15.6047C86.4378 16.1832 86.1545 16.916 86.1545 17.8031C86.1545 18.6902 86.4378 19.4295 87.0045 20.0209Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                        <path d="M101.509 12.7312C102.592 12.7312 103.467 13.0848 104.134 13.7919C104.802 14.499 105.136 15.4697 105.136 16.7039V22.6243H103.096V16.916C103.096 16.1961 102.907 15.6432 102.529 15.2575C102.151 14.8718 101.635 14.679 100.98 14.679C100.262 14.679 99.683 14.9104 99.2423 15.3732C98.8015 15.8232 98.5812 16.5175 98.5812 17.456V22.6243H96.5412V12.9819H98.5812V14.2162C99.1982 13.2262 100.174 12.7312 101.509 12.7312Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                        <path d="M117.438 22.6243H114.85L109.637 16.2025V22.6243H107.464V9.125H109.637V15.1804L114.661 9.125H117.249L111.903 15.7011L117.438 22.6243Z" className="fill-grey-900 dark:fill-white transition-colors duration-300" />
                    </svg>
                </Link>

                <div className="hidden md:flex gap-1 items-center">
                    {MenuItem?.map((i, idx) => (
                        <Link
                            className={`cursor-pointer flex justify-center items-center capitalize text-sm xl:text-base px-5 py-2.5 rounded-full transition-all duration-200 ${isActive === i ? 'bg-grey-100 dark:bg-grey-800 text-grey-900 dark:text-white font-medium shadow-sm' : 'text-grey-600 hover:text-grey-900 dark:text-grey-300 dark:hover:text-white'}`}
                            key={i + idx}
                            href={`${i === 'home' ? '/' : `/${i}`}`}
                        >
                            {i}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex gap-4 items-center">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full text-xl text-grey-600 dark:text-grey-300 hover:bg-grey-100 dark:hover:bg-grey-800 hover:text-grey-900 dark:hover:text-white transition-all duration-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
                        </button>
                    )}
                    <Link href="/signup" className="text-sm font-medium text-grey-700 hover:text-grey-900 dark:text-grey-300 dark:hover:text-white transition-colors duration-200">
                        Signup
                    </Link>
                    <Link href="/login" className="text-sm font-semibold text-grey-950 bg-limegreen-950 hover:bg-limegreen-900 dark:hover:bg-[#d8ff66] px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.03]">
                        Login
                    </Link>
                </div>

                <div className="flex md:hidden gap-3 items-center">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full text-xl text-grey-600 dark:text-grey-300 hover:bg-grey-100 dark:hover:bg-grey-800 transition-all duration-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
                        </button>
                    )}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="bg-limegreen-950 hover:bg-limegreen-900 px-4 py-2 text-xl rounded-full text-grey-950 flex justify-center items-center transition-all duration-200">
                        <HiOutlineMenuAlt3 />
                    </button>
                </div>
            </nav>

            {/* Sidebar mobile menu */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <aside className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-grey-950 border-l border-grey-200 dark:border-grey-800 p-6 z-50 transition-transform duration-300 md:hidden flex flex-col justify-between shadow-2xl ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center w-full pb-4 border-b border-grey-100 dark:border-grey-800">
                        <span className="text-lg font-semibold text-grey-900 dark:text-white">Menu</span>
                        <button
                            className="text-grey-500 hover:text-red-500 text-2xl transition-colors duration-200"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <MdClose />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2">
                        {MenuItem?.map((i, idx) => (
                            <Link
                                className={`cursor-pointer flex justify-start items-center text-lg font-medium px-4 py-3 rounded-xl transition-all duration-200 ${isActive === i ? 'bg-grey-100 dark:bg-grey-800 text-grey-900 dark:text-white' : 'text-grey-600 dark:text-grey-300 hover:bg-grey-50 dark:hover:bg-grey-900'}`}
                                key={i + idx}
                                onClick={() => {
                                    setSidebarOpen(false)
                                    setIsActive(i)
                                }}
                                href={`${i === 'home' ? '/' : `/${i}`}`}
                            >
                                <span className="capitalize">{i}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-grey-100 dark:border-grey-800">
                    <Link 
                        href="/signup" 
                        onClick={() => setSidebarOpen(false)}
                        className="w-full text-center py-3 rounded-xl border border-grey-200 dark:border-grey-800 font-medium text-grey-700 dark:text-white hover:bg-grey-50 dark:hover:bg-grey-900 transition-all duration-200"
                    >
                        Signup
                    </Link>
                    <Link 
                        href="/login" 
                        onClick={() => setSidebarOpen(false)}
                        className="w-full text-center py-3 rounded-xl bg-limegreen-950 text-grey-950 font-semibold shadow-sm hover:bg-limegreen-900 transition-all duration-200"
                    >
                        Login
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Navbar
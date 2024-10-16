'use client'

import Image from "next/image"
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";

const MenuItem = ['home', 'about', 'career', 'security']


const Navbar = () => {
    const path = usePathname()
    const [isActive, setIsActive] = useState();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (path) {
            setIsActive(path == '/' ? 'home' : path.replace('/', ''))
        }
    }, [path])




    return (
        <>
            <nav className="w-full px-4 py-3 bg-gray-900/10 backdrop-blur-lg s rounded-full flex justify-between items-center sticky top-10 z-50">
                <div className=" w-24 xl:w-32">
                    <svg width="118" height="31" viewBox="0 0 118 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.0625 15.625L15.5625 8.125L23.0625 15.625L15.5625 23.125L8.0625 15.625Z" fill="#CAFF33" />
                        <path d="M28.0625 10.625L23.0625 15.625V8.125H15.5625L20.5625 3.125H28.0625V10.625Z" fill="#CAFF33" />
                        <path d="M28.0625 20.625L23.0625 15.625V23.125H15.5625L20.5625 28.125H28.0625V20.625Z" fill="#CAFF33" />
                        <path d="M3.0625 20.625L8.0625 15.625V23.125H15.5625L10.5625 28.125H3.0625L3.0625 20.625Z" fill="#CAFF33" />
                        <path d="M3.0625 10.625L8.0625 15.625V8.125H15.5625L10.5625 3.125H3.0625L3.0625 10.625Z" fill="#CAFF33" />
                        <path d="M45.0778 9.125L40.4689 17.2631V22.6243H38.2966V17.2631L33.6877 9.125H36.1622L39.3922 15.1033L42.6033 9.125H45.0778Z" fill="white" />
                        <path d="M48.9438 22.875C47.5586 22.875 46.3812 22.3865 45.4116 21.4094C44.4419 20.4323 43.9571 19.2302 43.9571 17.8031C43.9571 16.3761 44.4419 15.174 45.4116 14.1969C46.3812 13.2198 47.5586 12.7312 48.9438 12.7312C50.3416 12.7312 51.519 13.2198 52.476 14.1969C53.4456 15.174 53.9305 16.3761 53.9305 17.8031C53.9305 19.2302 53.4456 20.4323 52.476 21.4094C51.519 22.3865 50.3416 22.875 48.9438 22.875ZM46.8471 19.9823C47.4138 20.5608 48.1127 20.8501 48.9438 20.8501C49.7749 20.8501 50.4738 20.5608 51.0404 19.9823C51.6071 19.4038 51.8904 18.6774 51.8904 17.8031C51.8904 16.9289 51.6071 16.2025 51.0404 15.6239C50.4738 15.0454 49.7749 14.7561 48.9438 14.7561C48.1127 14.7561 47.4138 15.0454 46.8471 15.6239C46.2804 16.2025 45.9971 16.9289 45.9971 17.8031C45.9971 18.6774 46.2804 19.4038 46.8471 19.9823Z" fill="white" />
                        <path d="M62.1406 12.9819H64.1806V22.6243H62.1406V21.3901C61.5236 22.38 60.5477 22.875 59.2129 22.875C58.1299 22.875 57.2547 22.5214 56.5873 21.8143C55.9199 21.1072 55.5862 20.1366 55.5862 18.9024V12.9819H57.6262V18.6902C57.6262 19.4102 57.8151 19.963 58.1928 20.3487C58.5706 20.7344 59.0869 20.9272 59.7417 20.9272C60.4595 20.9272 61.0388 20.7023 61.4795 20.2523C61.9203 19.7894 62.1406 19.0888 62.1406 18.1502V12.9819Z" fill="white" />
                        <path d="M68.6061 14.6019C69.1224 13.4062 70.092 12.8084 71.515 12.8084V15.0647C70.7342 15.0133 70.0542 15.2061 69.475 15.6432C68.8957 16.0675 68.6061 16.7746 68.6061 17.7646V22.6243H66.5661V12.9819H68.6061V14.6019Z" fill="white" />
                        <path d="M80.9367 15.6239C81.516 15.9325 81.9693 16.3568 82.2967 16.8967C82.6241 17.4367 82.7878 18.0603 82.7878 18.7674C82.7878 19.873 82.4037 20.7923 81.6356 21.5251C80.8674 22.2579 79.9293 22.6243 78.8211 22.6243H73.1545V9.125H78.4056C79.4886 9.125 80.4015 9.48498 81.1445 10.2049C81.9 10.9121 82.2778 11.7991 82.2778 12.8662C82.2778 14.0362 81.8308 14.9554 80.9367 15.6239ZM78.4056 11.2077H75.3267V14.7561H78.4056C78.8841 14.7561 79.2871 14.589 79.6145 14.2547C79.9419 13.9076 80.1056 13.4833 80.1056 12.9819C80.1056 12.4805 79.9419 12.0627 79.6145 11.7284C79.2871 11.3813 78.8841 11.2077 78.4056 11.2077ZM78.8211 20.5416C79.3249 20.5416 79.7467 20.3616 80.0867 20.0016C80.4393 19.6287 80.6156 19.1788 80.6156 18.6516C80.6156 18.1245 80.4393 17.681 80.0867 17.321C79.7467 16.9482 79.3249 16.7617 78.8211 16.7617H75.3267V20.5416H78.8211Z" fill="white" />
                        <path d="M92.1234 12.9819H94.1634V22.6243H92.1234V21.2358C91.3552 22.3286 90.2534 22.875 88.8178 22.875C87.5208 22.875 86.4126 22.3865 85.4934 21.4094C84.5741 20.4194 84.1145 19.2173 84.1145 17.8031C84.1145 16.3761 84.5741 15.174 85.4934 14.1969C86.4126 13.2198 87.5208 12.7312 88.8178 12.7312C90.2534 12.7312 91.3552 13.2712 92.1234 14.3512V12.9819ZM87.0045 20.0209C87.5711 20.5994 88.2826 20.8887 89.1389 20.8887C89.9952 20.8887 90.7067 20.5994 91.2734 20.0209C91.84 19.4295 92.1234 18.6902 92.1234 17.8031C92.1234 16.916 91.84 16.1832 91.2734 15.6047C90.7067 15.0133 89.9952 14.7176 89.1389 14.7176C88.2826 14.7176 87.5711 15.0133 87.0045 15.6047C86.4378 16.1832 86.1545 16.916 86.1545 17.8031C86.1545 18.6902 86.4378 19.4295 87.0045 20.0209Z" fill="white" />
                        <path d="M101.509 12.7312C102.592 12.7312 103.467 13.0848 104.134 13.7919C104.802 14.499 105.136 15.4697 105.136 16.7039V22.6243H103.096V16.916C103.096 16.1961 102.907 15.6432 102.529 15.2575C102.151 14.8718 101.635 14.679 100.98 14.679C100.262 14.679 99.683 14.9104 99.2423 15.3732C98.8015 15.8232 98.5812 16.5175 98.5812 17.456V22.6243H96.5412V12.9819H98.5812V14.2162C99.1982 13.2262 100.174 12.7312 101.509 12.7312Z" fill="white" />
                        <path d="M117.438 22.6243H114.85L109.637 16.2025V22.6243H107.464V9.125H109.637V15.1804L114.661 9.125H117.249L111.903 15.7011L117.438 22.6243Z" fill="white" />
                    </svg>
                </div>

                <div className="hidden md:flex gap-5 text-white items-center">
                    {MenuItem?.map((i, idx) => <Link
                        className={`cursor-pointer flex justify-center items-center capitalize text-sm xl:text-lg px-6 py-1  ${isActive === i ? 'bg-grey-800   rounded-full' : ''}`}
                        key={i + idx}
                        onClick={() => setIsActive(i)}
                        href={`${i === 'home' ? '/' : `/${i}`}`}
                    >
                        {i}
                    </Link>)}

                </div>
                <div className="hidden md:flex gap-4">
                    <button className="text-white">Signup</button>
                    <button className="text-grey-950 bg-limegreen-950 px-5 py-2 rounded-full">Login</button>
                </div>

                <button
                    onClick={() => setSidebarOpen((prev) => !prev)}
                    className="bg-limegreen-950 px-5 py-2 text-2xl rounded-3xl text-grey-950 flex justify-center items-center md:hidden">
                    <HiOutlineMenuAlt3 />
                </button>
            </nav>
            <aside className={`w-full md:hidden transition-all ease-linear delay-100 duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}  bg-limegreen-950 p-6 absolute z-50 top-0 min-h-screen bottom-0 right-0`}>
                <button
                    className="w-full text-red-500 text-3xl self-end flex justify-end"
                    onClick={(() => setSidebarOpen((prev) => !prev))}>
                    <MdClose />
                </button>
                <nav
                    className="flex justify-center h-full flex-col md:hidden gap-5 text-white  items-center">
                    {MenuItem?.map((i, idx) => <Link
                        className={`cursor-pointer flex justify-center items-center font-bold text-3xl uppercase text-grey-950 xl:text-lg px-6 py-1  ${isActive === i ? 'bg-white-4 rounded-md' : ''}`}
                        key={i + idx}
                        onClick={() => {
                            setSidebarOpen((prev) => !prev)
                            setIsActive(i)
                        }}
                        href={`${i === 'home' ? '/' : `/${i}`}`}
                    >
                        {i}
                    </Link>)}

                </nav>
            </aside>
        </>
    )
}

export default Navbar
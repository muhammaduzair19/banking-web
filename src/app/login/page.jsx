'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { PrimaryBtn } from "@/components/btn";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setEmail("");
            setPassword("");
        }, 1500);
    };

    return (
        <main className="w-full min-h-[80vh] flex flex-col justify-center items-center relative py-12 px-4 overflow-hidden">
            <Image src={'/pattern/dotted.png'} width={200} height={200} className="absolute top-10 left-10 -z-10 opacity-30 dark:opacity-75" alt='pattern' />
            <Image src={'/pattern/arrows.png'} width={200} height={200} className="absolute bottom-10 right-10 -z-10 opacity-20 dark:opacity-60" alt='pattern' />

            <div className="w-full max-w-lg bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-none transition-all duration-300">
                <div className="text-center flex flex-col items-center gap-3 mb-8">
                    <Link href="/">
                        <svg width="40" height="40" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:scale-105 transition-transform">
                            <path d="M8.0625 15.625L15.5625 8.125L23.0625 15.625L15.5625 23.125L8.0625 15.625Z" fill="#CAFF33" />
                            <path d="M28.0625 10.625L23.0625 15.625V8.125H15.5625L20.5625 3.125H28.0625V10.625Z" fill="#CAFF33" />
                            <path d="M28.0625 20.625L23.0625 15.625V23.125H15.5625L20.5625 28.125H28.0625V20.625Z" fill="#CAFF33" />
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-bold text-grey-900 dark:text-white mt-2">Welcome Back</h1>
                    <p className="text-sm text-grey-600 dark:text-grey-400">Enter your details to access your secure bank account.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-455 text-sm rounded-xl text-center font-medium">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-455 text-sm rounded-xl text-center font-medium">
                        Login successful! Redirecting to secure panel...
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-sm font-semibold text-grey-700 dark:text-grey-300">Email Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-grey-400 dark:text-grey-500">
                                <HiOutlineMail size={20} />
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="w-full bg-white dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-grey-900 dark:text-white placeholder-grey-400 dark:placeholder-grey-600 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-1.5 text-left">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-grey-700 dark:text-grey-300">Password</label>
                            <a href="#" className="text-xs font-semibold text-lime-600 dark:text-limegreen-950 hover:underline">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-grey-400 dark:text-grey-500">
                                <HiOutlineLockClosed size={20} />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter secure password"
                                className="w-full bg-white dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-grey-900 dark:text-white placeholder-grey-400 dark:placeholder-grey-600 transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-grey-400 dark:text-grey-500 hover:text-grey-600 dark:hover:text-grey-350"
                            >
                                {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between mt-1">
                        <label className="flex items-center gap-2.5 text-sm text-grey-600 dark:text-grey-400 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4.5 h-4.5 rounded border-grey-300 text-lime-600 focus:ring-lime-500 dark:bg-grey-950 dark:border-grey-800 cursor-pointer"
                            />
                            Remember my session
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading || success}
                        className="w-full py-3.5 bg-limegreen-950 hover:bg-limegreen-900 dark:hover:bg-[#d8ff66] text-grey-950 font-semibold text-sm rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-95 transition-all duration-200 mt-2 flex justify-center items-center"
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-grey-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : "Login to Account"}
                    </button>

                    {/* Social Divider */}
                    <div className="flex items-center gap-3 my-2">
                        <hr className="w-full border-grey-200 dark:border-grey-800" />
                        <span className="text-xs text-grey-400 dark:text-grey-500 font-bold uppercase whitespace-nowrap">or continue with</span>
                        <hr className="w-full border-grey-200 dark:border-grey-800" />
                    </div>

                    {/* Social logins */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="flex justify-center items-center gap-2.5 py-3 border border-grey-200 dark:border-grey-800 rounded-xl bg-white dark:bg-grey-950 text-grey-700 dark:text-white hover:bg-grey-50 dark:hover:bg-grey-900 transition-colors font-medium text-sm shadow-sm"
                        >
                            <FaGoogle size={16} />
                            Google
                        </button>
                        <button
                            type="button"
                            className="flex justify-center items-center gap-2.5 py-3 border border-grey-200 dark:border-grey-800 rounded-xl bg-white dark:bg-grey-950 text-grey-700 dark:text-white hover:bg-grey-50 dark:hover:bg-grey-900 transition-colors font-medium text-sm shadow-sm"
                        >
                            <FaApple size={16} />
                            Apple
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-grey-600 dark:text-grey-400 mt-4">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-bold text-lime-600 dark:text-limegreen-950 hover:underline">
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

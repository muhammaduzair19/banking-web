'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PrimaryBtn } from "@/components/btn";

export default function SignupPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (!agreeTerms) {
            setError("You must agree to the Terms of Service.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setAgreeTerms(false);
        }, 1500);
    };

    return (
        <main className="w-full min-h-[85vh] flex flex-col justify-center items-center relative py-12 px-4 overflow-hidden">
            <Image src={'/pattern/dotted.png'} width={200} height={200} className="absolute top-10 left-10 -z-10 opacity-30 dark:opacity-75" alt='pattern' />
            <Image src={'/pattern/arrows.png'} width={200} height={200} className="absolute bottom-10 right-10 -z-10 opacity-20 dark:opacity-60" alt='pattern' />

            <div className="w-full max-w-xl bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-none transition-all duration-300">
                <div className="text-center flex flex-col items-center gap-3 mb-8">
                    <Link href="/">
                        <svg width="40" height="40" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:scale-105 transition-transform">
                            <path d="M8.0625 15.625L15.5625 8.125L23.0625 15.625L15.5625 23.125L8.0625 15.625Z" fill="#CAFF33" />
                            <path d="M28.0625 10.625L23.0625 15.625V8.125H15.5625L20.5625 3.125H28.0625V10.625Z" fill="#CAFF33" />
                            <path d="M28.0625 20.625L23.0625 15.625V23.125H15.5625L20.5625 28.125H28.0625V20.625Z" fill="#CAFF33" />
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-bold text-grey-900 dark:text-white mt-2">Create Account</h1>
                    <p className="text-sm text-grey-600 dark:text-grey-400">Join YourBank and start managing your assets securely.</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm rounded-xl text-center font-medium">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 text-sm rounded-xl text-center font-medium">
                        Registration successful! Welcome to YourBank!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5 text-left">
                            <label className="text-sm font-semibold text-grey-700 dark:text-grey-300">First Name</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-grey-400 dark:text-grey-500">
                                    <HiOutlineUserCircle size={20} />
                                </span>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="John"
                                    className="w-full bg-white dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-grey-900 dark:text-white placeholder-grey-400 dark:placeholder-grey-600 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5 text-left">
                            <label className="text-sm font-semibold text-grey-700 dark:text-grey-300">Last Name</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-grey-400 dark:text-grey-500">
                                    <HiOutlineUserCircle size={20} />
                                </span>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Doe"
                                    className="w-full bg-white dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-grey-900 dark:text-white placeholder-grey-400 dark:placeholder-grey-600 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5 text-left">
                        <label className="text-sm font-semibold text-grey-700 dark:text-grey-300">Email Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-grey-400 dark:text-grey-500">
                                <HiOutlineUserCircle size={20} className="hidden" /> {/* placeholder */}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8gM5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
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

                    {/* Password Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5 text-left">
                            <label className="text-sm font-semibold text-grey-700 dark:text-grey-300">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-grey-400 dark:text-grey-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create secure password"
                                    className="w-full bg-white dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-grey-900 dark:text-white placeholder-grey-400 dark:placeholder-grey-600 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-grey-400 dark:text-grey-500 hover:text-grey-600 dark:hover:text-grey-350"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L5.636 5.636m-1.817 17.657l17.657-17.657"></path>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5 text-left">
                            <label className="text-sm font-semibold text-grey-700 dark:text-grey-300">Confirm Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-grey-400 dark:text-grey-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    className="w-full bg-white dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-grey-900 dark:text-white placeholder-grey-400 dark:placeholder-grey-600 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Terms Checklist */}
                    <div className="flex items-start justify-between mt-1">
                        <label className="flex items-start gap-2.5 text-sm text-grey-600 dark:text-grey-400 cursor-pointer select-none text-left">
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="w-4.5 h-4.5 rounded border-grey-300 text-lime-600 focus:ring-lime-500 dark:bg-grey-950 dark:border-grey-800 cursor-pointer mt-0.5"
                            />
                            <span>
                                I agree to the{" "}
                                <a href="#" className="font-bold text-lime-600 dark:text-limegreen-950 hover:underline">Terms of Service</a>
                                {" "}and{" "}
                                <a href="#" className="font-bold text-lime-600 dark:text-limegreen-950 hover:underline">Privacy Policy</a>
                            </span>
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
                        ) : "Create Account"}
                    </button>

                    {/* Social Divider */}
                    <div className="flex items-center gap-3 my-2">
                        <hr className="w-full border-grey-200 dark:border-grey-800" />
                        <span className="text-xs text-grey-400 dark:text-grey-500 font-bold uppercase whitespace-nowrap">or sign up with</span>
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

                    {/* Login Link */}
                    <p className="text-center text-sm text-grey-600 dark:text-grey-400 mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="font-bold text-lime-600 dark:text-limegreen-950 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

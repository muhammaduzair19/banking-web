import { TbBriefcaseFilled } from "react-icons/tb";
import { PrimaryBtn } from "./btn";

const JobCard = ({ jobTitle, description, location, department, keypoints }) => {
    return (
        <div className='w-full flex flex-col bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-850 rounded-3xl shadow-sm dark:shadow-none transition-colors duration-300'>
            <div className='flex flex-col gap-6 p-6 md:p-8'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-2xl text-grey-900 dark:text-white font-bold leading-snug'>{jobTitle}</h2>
                    <div className='flex gap-3 flex-wrap items-center mt-2'>
                        <span className='text-center text-xs py-1.5 px-4 text-grey-600 dark:text-grey-300 bg-white-2 dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-full font-medium'>Location: {location}</span>
                        <span className='text-center text-xs py-1.5 px-4 text-grey-600 dark:text-grey-300 bg-white-2 dark:bg-grey-950 border border-grey-200 dark:border-grey-800 rounded-full font-medium'>Department: {department}</span>
                    </div>
                </div>
                
                <div className='flex flex-col gap-2 mt-2'>
                    <h3 className='text-grey-900 dark:text-white text-lg font-bold'>About This Job</h3>
                    <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>{description}</p>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <h3 className='text-grey-900 dark:text-white text-lg font-bold'>Requirements & Qualifications</h3>
                    <ul className='text-grey-600 dark:text-grey-300 flex flex-col gap-3'>
                        {keypoints?.map((i, idx) => (
                            <li key={idx} className='flex items-start gap-2.5'>
                                <span className="text-lime-600 dark:text-limegreen-950 mt-0.5 flex-shrink-0">
                                    <TbBriefcaseFilled size={18} />
                                </span>
                                <p className='text-sm leading-relaxed'>{i}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="pt-4 border-t border-grey-100 dark:border-grey-800 mt-2">
                    <PrimaryBtn text={'Apply Now'} />
                </div>
            </div>
        </div>
    )
}



export default JobCard;
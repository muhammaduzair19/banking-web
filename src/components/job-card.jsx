import { TbBriefcaseFilled } from "react-icons/tb";
import { PrimaryBtn } from "./btn";

const JobCard = ({ jobTitle, description, location, department, keypoints }) => {
    return (
        <div className='w-full p-5 flex flex-col gap-4 bg-grey-900 border border-grey-800 rounded-3xl'>
            <div className='flex flex-col gap-8 p-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className=' text-2xl text-white font-semibold'>{jobTitle}</h2>
                    <div className='flex gap-4 items-center'>
                        <span className='text-center text-sm py-2 px-4 text-grey-200 bg-grey-950 border border-grey-800 rounded-3xl'>Location: {location}</span>
                        <span className='text-center text-sm py-2 px-4 text-grey-200 bg-grey-950 border border-grey-800 rounded-3xl'>Department: {department}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-white text-xl font-semibold'>About This Job</h3>
                    <p className=' text-sm text-grey-200'>{description}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-white text-xl font-semibold'>Requirements & Qualifications</h3>
                    <ul className=' text-grey-200 flex flex-col gap-3'>
                        {
                            keypoints?.map((i, idx) => <li key={idx} className='flex items-center gap-2'>
                                <span>
                                    <TbBriefcaseFilled size={20} />
                                </span>
                                <p className='text-sm'>{i}</p>
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <PrimaryBtn text={'Apply'} />
                </div>
            </div>
        </div>
    )
}



export default JobCard;
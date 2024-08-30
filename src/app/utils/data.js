import { TbBriefcaseFilled } from "react-icons/tb";
import { TbAppsFilled } from "react-icons/tb";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa6";
import { BsBasket } from "react-icons/bs";
import { IoBulb } from "react-icons/io5";
import { HiServerStack } from "react-icons/hi2";


export const products = [
    {
        title: 'Checking Accounts',
        icon: <TbBriefcaseFilled />,
        description: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.'
    },
    {
        title: 'Saving Accounts',
        icon: <TbBriefcaseFilled />,
        description: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you"
    },
    {
        title: 'Loans and Mortgages',
        icon: <TbBriefcaseFilled />,
        description: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.'
    },
];
export const FAQs = [
    {
        question: 'How do I open an account with YourBank?',
        answer: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
    },
    {
        question: 'What documents do I need to provide to apply for a loan?',
        answer: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."
    },
    {
        question: 'How can I access my accounts online?',
        answer: `Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`
    },
    {
        question: 'Are my transactions and personal information secure?',
        answer: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.'
    },
];
export const testimonials = [
    {
        review: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
        name: 'John D'
    },
    {
        review: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
        name: 'Emily G'
    },
    {
        review: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
        name: 'Sarah T'
    },
];
export const security = [
    {
        id: 1,
        icon: <TbAppsFilled />,
        title: 'Secure Online Banking Platform',
        description: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.'
    },
    {
        id: 2,
        icon: <HiSquare3Stack3D />,
        title: 'Multi-Factor Authentication',
        description: 'To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.'
    },
    {
        id: 3,
        icon: <BsStars />,
        title: 'Fraud Monitoring',
        description: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.'
    },
    {
        id: 4,
        icon: <FaRupeeSign />,
        title: 'Secure Mobile Banking',
        description: 'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.'
    },
];
export const pressRelease = [
    {
        id: 1,
        image: '/images/pr-1.png',
        title: 'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
        location: 'Pakistan',
        date: '06/11/2024',
        description: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
    },
    {
        id: 2,
        image: '/images/pr-2.png',
        title: 'YourBank Expands Branch Network with Opening of New Location in Lahore',
        location: 'Pakistan',
        date: '12/11/2024',
        description: 'YourBank is excited to announce the grand opening of our newest branch in Lahore. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.'
    },
    {
        id: 3,
        image: '/images/pr-3.png',
        title: 'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives',
        location: 'Pakistan',
        date: '24/12/2024',
        description: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.'
    },
    {
        id: 4,
        image: '/images/pr-4.png',
        title: 'YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility',
        location: 'Pakistan',
        date: '28/12/2024',
        description: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.'
    },
];
export const values = [
    {
        id: 1,
        title: 'Integrity',
        description: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.'
    },
    {
        id: 2,
        title: 'Customer Centricity',
        description: 'Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.'
    },
    {
        id: 3,
        title: 'Collaboration',
        description: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.'
    },
    {
        id: 4,
        title: 'Innovation',
        description: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.'
    },
];
export const benefits = [
    {
        id: 1,
        icon: <BsBasket />,
        title: 'Competitive Compensation',
        description: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.'
    },
    {
        id: 2,
        icon: <IoBulb />,
        title: 'Health and Wellness',
        description: 'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.'
    },
    {
        id: 3,
        icon: <TbBriefcaseFilled />,
        title: 'Retirement Planning',
        description: 'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.'
    },
    {
        id: 4,
        icon: <HiServerStack />,
        title: 'Work-Life Balance',
        description: 'We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.'
    },
];
export const jobOpenings = [
    {
        id: 1,
        jobTitle: 'Relationship Manager',
        location: 'Pakistan',
        department: 'Retail Banking',
        description: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
        keypoints: [
            "Bachelor's degree in Business, Finance, or a related field",
            "Minimum of 3 years of experience in sales or relationship management in the banking industry",
            "Proven track record of meeting and exceeding sales targets",
            "Excellent interpersonal and negotiation skills",
            "Strong knowledge of banking products and services"
        ]
    },

    {
        id: 2,
        jobTitle: 'Risk Analyst',
        location: 'Pakistan',
        department: 'Risk Management',
        description: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
        keypoints: [
            "Bachelor's degree in Finance, Economics, or a related field",
            "Minimum of 2 years of experience in risk management or a similar role",
            "Proficiency in risk analysis tools and techniques",
            "Strong analytical and problem-solving skills",
            "Knowledge of regulatory requirements and industry best practices"
        ]
    },
    {
        id: 3,
        jobTitle: 'IT Security Specialist',
        location: 'Pakistan',
        department: 'Information Technology',
        description: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
        keypoints: [
            "Bachelor's degree in Computer Science, Information Security, or a related field",
            "Minimum of 5 years of experience in IT security or a similar role",
            "In-depth knowledge of network security protocols and technologies",
            "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
            "Professional certifications such as CISSP or CISM are preferred"
        ]
    },
];
import React from 'react'

const QuestionCard = ({ question, answer }) => {
    return (
        <div className='w-full p-6 bg-white dark:bg-grey-900 border border-grey-200 dark:border-grey-800 rounded-2xl flex flex-col gap-4 text-start shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300'>
            <p className='font-semibold text-grey-900 dark:text-white'>{question}</p>
            <hr className='border-grey-200 dark:border-grey-800' />
            <p className='text-sm text-grey-600 dark:text-grey-300 leading-relaxed'>
                {answer}
            </p>
        </div>
    )
}

export default QuestionCard
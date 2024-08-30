import React from 'react'

const QuestionCard = ({ question, answer }) => {
    return (
        <div className='w-full p-5 bg-grey-900 border border-grey-800 rounded-xl flex flex-col gap-5 text-start'>
            <p className='font-semibold'>{question}</p>
            <hr className='border border-grey-800' />
            <p className='text-sm text-grey-200'>
                {answer}
            </p>
        </div>
    )
}

export default QuestionCard
import React from 'react'

const Card = ({title,userId,status}) => {
  return (
    <>
        <div className='rounded-2xl w-96  mt-5 shadow-xl'>
            <div className='flex justify-center items-center'>

            <div className='w-full px-5'>
            <p className='text-2xl font-extrabold leading-[1.5] w-full'>{title}</p>
            <p className='text-lg font-bold'>UserId:{userId}</p>
            <p className='text-lg font-bold'>Status:{status?'Completed':'Pending'}</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Card
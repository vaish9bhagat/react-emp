import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='bg-[#212121] p-6  w-full text-white flex flex-row gap-4'>
        <div className='w-[27%] p-4 bg-red-700 rounded-lg '>
            <h1 className='text-5xl font-semibold'>{data.taskCount.newTask}</h1>
            <h1 className='text-2xl font-semibold'>New Task</h1>

        </div>
        <div className='w-[27%] p-4 bg-blue-700 rounded-lg  '>
            <h1 className='text-5xl font-semibold'>{data.taskCount.completed}</h1>
            <h1 className='text-2xl font-semibold'>Completed</h1>

        </div>
        <div className='w-[27%] p-4 bg-green-700 rounded-lg '>
            <h1 className='text-5xl font-semibold'>{data.taskCount.accepted}</h1>
            <h1 className='text-2xl font-semibold'>Accepted</h1>

        </div>
        <div className='w-[27%] p-4 bg-yellow-500 rounded-lg '>
            <h1 className='text-5xl font-semibold'>{data.taskCount.failedTask}</h1>
            <h1 className='text-2xl font-semibold'>Failed</h1>

        </div>
    </div>
  )
}

export default TaskNumber
import React from 'react'

const FaildedTask = ({data}) => {
  return (
    <div className="bg-green-700  flex-shrink-0 h-52 w-72 rounded-lg  p-5 text-white flex-nowrap ">
    <div className="flex justify-between items-center flex-row pb-3 text-white font-xl font-semibold">
      <button className="bg-orange-400 px-1 rounded">{data.category}</button>
      <h1>{data.taskDate}</h1>
    </div>
    <h1 className="text-xl font-bold text-white pb-1">{data.taskTitle} </h1>
    <p>
     {data.taskDescription}
    </p>
    <button className='py-1 text-sm mt-2 rounded mx-auto bg-red-500'>Failed Task</button>
  </div>
  )
}

export default FaildedTask
import React from "react";

const NewTask = ({data}) => {

  return (
    <div className="bg-purple-600  flex-shrink-0 h-52 w-72 rounded-lg  p-5 text-white flex-nowrap ">
      <div className="flex justify-between items-center flex-row pb-3 text-white font-xl font-semibold">
        <button className="bg-orange-400 px-1 rounded text-white">{data.category}</button>
        <h1 className="">{data.taskDate}</h1>
      </div>
      <h1 className="text-xl font-bold text-white pb-1"> {data.taskTitle} </h1>
      <p>
       {data.taskDescription}
      </p>
      <div className="w-full flex gap-3 mt-2">
        
        <button className="bg-green-400 rounded  py-1 text-sm" type="button">Marks as Completed</button>
        <button className="bg-red-500 rounded  py-1 text-sm">Marks as Failed</button>
      </div>
    </div>
  );
};

export default NewTask;

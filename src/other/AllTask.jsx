import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
const AllTask = () => {
  const [userdata,setuserdata] = useContext(AuthContext);
  
  
  return (
    <div className=" px-3 py-1 mx-5 my-2 bg-[#373636] h-28 flex flex-col gap-1 rounded">
      <div className="bg-red-400  flex justify-evenly items-center text-white font-bold text-lg rounded">
        <h3 className="w-1/5" >Employee Name</h3>
        <h3 className=" w-1/5">New Task</h3>
        <h3 className=" w-1/5">Active Task</h3>
        <h3 className=" w-1/5">Completed</h3>
        <h3 className="">Failed</h3>
      </div>
     <div className=" h-[80%] overflow-auto "> {userdata.map((elem) => {
       return<div className="bg-transparent border-2 border-red-400 p-2 flex justify-evenly gap-3 mb-1 items-center text-white font-semibold text-lg rounded">
         <h3 className="w-1/5 text-white" >{elem.name}</h3>
        <h3 className=" w-1/5 text-purple-900">{elem.taskCount.newTask}</h3>
        <h3 className=" w-1/5 text-orange-800">{elem.taskCount.accepted}</h3>
        <h3 className=" w-1/5 text-green-600">{elem.taskCount.completed}</h3>
        <h3 className=" text-red-600">{elem.taskCount.failedTask}</h3>
        </div>
      })}</div>
     
    
    </div>
  );
};

export default AllTask;

import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const CreateTask = () => {
  const [userdata, setuserdata] = useContext(AuthContext);

  const [ taskTitle, settaskTitle] = useState("");
  const [ taskDate, settaskDate] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [AssignTO, setAssignTO] = useState("");
  const [category, setcategory] = useState("");

  const [NewTask, setNewTask] = useState({});
  const SubmitHandler = (e) => {
    e.preventDefault();
    setAssignTO("");
    setcategory("")
    settaskDescription("");
    settaskDate("");
    settaskTitle("");
    setNewTask({
      taskTitle,
      taskDate,
      category,
      taskDescription,
      AssignTO,
      active: false,
      newTask: true,
      failedTask: false,
      completed: false,
    });

    const data = userdata;

    data.forEach((elem) => {
      if (AssignTO == elem.name) {
        elem.tasks.push(NewTask);
        console.log(elem);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });
    setuserdata(data);
  };

  return (
    <div className=" px-3 mx-5 my-1 bg-[#373636] rounded">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className=" flex justify-between items-start flex-row p-5 rounded text-white w-full gap-3"
      >
        <div className="w-1/2">
          <div className="px-5 py-1">
            <h1>Make task title</h1>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              className=" w-full  bg-transparent text-white rounded border-2 "
              type="text"
              placeholder="title"
            />
          </div>
          <div className="px-5 py-1">
            <h1>Date</h1>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              className="  w-full  bg-transparent text-white rounded border-2 "
              type="date"
              name=""
              id=""
            />
          </div>
          <div className="px-5 py-1">
            <h1>Assign to</h1>
            <input
              value={AssignTO}
              onChange={(e) => {
                setAssignTO(e.target.value);
              }}
              className=" w-full  bg-transparent text-white rounded border-2 "
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div className="px-5 py-1">
            <h1>Category</h1>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className=" w-full   bg-transparent text-white rounded border-2 "
              type="text"
              name=""
              id=""
              placeholder="Design,dev etc."
            />
          </div>
        </div>
        <div className="w-1/2 ">
          <div className=" py-1">
            <h1>Description</h1>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                settaskDescription(e.target.value);
              }}
              className=" w-full bg-transparent text-white rounded border-2 p-11 mb-7"
              name=""
              id=""
            ></textarea>
            <button className="w-full bg-red-500 py-1 rounded">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

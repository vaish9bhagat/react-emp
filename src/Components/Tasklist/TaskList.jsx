import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FaildedTask from "./FaildedTask";
import CompleteTask from "./CompleteTask";
const TaskList = ({ data }) => {
  console.log(data.tasks);
  return (
    <div className="w-full  bg-[#212121] p-5 flex flex-row gap-4  overflow-x-auto flex-nowrap ">
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask data={elem} />;
        }
        if (elem.failedTask) {
          return <FaildedTask data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;

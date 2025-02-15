import React from "react";
import Header from "../../other/Header";
import AllTask from "../../other/AllTask";
import CreateTask from "../../other/CreateTask";

const Admin = (props) => {
  
  return (
    <div className="bg-[#212121] h-screen px-5 ">
      <Header ChangeUser={props.ChangeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default Admin;

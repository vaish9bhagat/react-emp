import React from "react";

const Header = (props) => {
  const LogOutUser=()=>{
    localStorage.setItem("loggedInUser" ,"")
   props.ChangeUser("")
  
  }

  return (
    <div className="w-full  p-5 bg-[#212121] font-semibold flex justify-between items-center text-white">
      <h1 className="text-2xl">
        Hello <br /> <span className="text-xl"> name 👋</span>
      </h1>
      <button onClick={()=>{
        LogOutUser()
      }} className="bg-red-500 px-3 py-2 rounded-sm text-xm">
        
        Log out
      </button>
    </div>
  );
};

export default Header;

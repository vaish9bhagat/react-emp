import React from "react";
import { useState } from "react";

const Login = ({ HandleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    HandleLogin(email, password);

    setemail("");
    setpassword("");
  };
 
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-center items-center gap-3 flex-col border-2 border-emerald-300 p-14 rounded-2xl"
      >
        <input
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
            
          }}
          className="border-emerald-300 border-2 rounded-2xl bg-transparent text-white p-2 text-xl"
          placeholder="Enter email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value)
          }}
          className="border-emerald-300 border-2 rounded-2xl bg-transparent text-white p-2 text-xl"
          placeholder="Enter password"
          type="password"
          name=""
          id=""
        />
        <button className="bg-emerald-300 px-5 py-2 text-xl rounded-2xl mt-5">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;

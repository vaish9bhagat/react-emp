import React from "react";
import Login from "./Components/Auth/Login";
import EmpDashBoard from "./Components/Dashboard/EmpDashboard";
import Admin from "./Components/Dashboard/Admin";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./Context/AuthProvider";
import { useContext } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [ userdata,setuserdata] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);
  const HandleLogin = (email, password) => {
    if (email == "admin@me.in" && password == "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else if (userdata) {
      const emp = userdata.find(
        (e) => email == e.email && password == e.password
      );
      if (emp) {
        setUser("employee");
        setloggedInUserData(emp);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: emp })
        );
      }
    } else {
      alert("invalid credintials");
    }
  };

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ""}
      {user == "admin" ? (
        <Admin ChangeUser={setUser} />
      ) : user == "employee" ? (
        <EmpDashBoard ChangeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;

import { log } from "console";
import React, { useState } from "react";

export default function Login() {
  const [data, setData] = useState("data");
  function getData() {
    setData("new name");
    console.log(data);
    
  }
  return (
    <>
      <div className="container">
        <div>
          <input type="text" />
          Name
        </div>
        <div>
          <input type="password" />
          Password
        </div>
        <div>
          <input onClick={getData} type="button" value="Login" />
        </div>
      </div>
    </>
  );
}

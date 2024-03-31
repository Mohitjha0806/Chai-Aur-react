import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="">
      <h2>Login</h2>
      <input
        type="text"
        className="p-2 border-spacing-1 rounded m-2 hover:border-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      
      <input
        type="text"
        className="p-2 border-spacing-1 m-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

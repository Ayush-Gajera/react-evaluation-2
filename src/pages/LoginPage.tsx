import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [userName,setUserName]=useState<string>();
    const [password,setPassword]=useState<string>();
    const navigate=useNavigate();
    const [error,setError]=useState("");
    function handleLogin(){
        if(!userName){
            setError("user name is empty");
            return;
        } 
        localStorage.setItem("username", userName as string);
        localStorage.setItem("password", password as string);
        navigate("/dashboard");
    }
return (
  <>
    <h1>Login</h1>
    <label htmlFor="username">Enter Username</label>
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
    {error}
    <label htmlFor="username">Enter Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}

    />
    <button onClick={handleLogin}>Login</button>
  </>
);
}
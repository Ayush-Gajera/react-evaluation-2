import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedComponent(){
    const user=localStorage.getItem("username");
   
    return (
      <>{user ? <Outlet/> : <Navigate to={"/login"} />}</>
    );
}
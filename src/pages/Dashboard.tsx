import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const [task,setTask]=useState<string[]>([]);
    const [value,setvalue]=useState<string>("");
    const navigate =useNavigate();
    function handleClick(){
        setTask(prev=>[...prev,value])
        localStorage.setItem("Task",JSON.stringify(task));
        setvalue("")
    }
    function deletetask(id:string){
        setTask(prev=>(
            prev.filter(t=>t!=id)
        ))
    }
    function editTask(id:string){
        const editvalue= task.find(t=>t==id);
        if(editvalue){

            setvalue(editvalue);
        }
        setTask((prev) => prev.filter((t) => t != id));
    }
    function redirect(id:string){
        navigate(`/dashboard/${id}`);
    }
    return(<>
    <h1>Dashboard</h1>
    <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}/>
    <button onClick={handleClick}>add task</button>
    {task.map(t=>(
        <div key={t}>
            <span onClick={()=>redirect(t)}>{t}</span>
            <button onClick={()=>deletetask(t)}>delete</button>
            <button onClick={()=>editTask(t)}>Edit</button>
        </div>
    ))}
    </>)
}
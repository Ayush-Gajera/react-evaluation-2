import { useParams } from "react-router-dom";

export default function SubTaskPage(){
    const data =localStorage.getItem("Task");
    const param=useParams()
    return(
        <>
        {data}
        </>
    )
}
import React,{useState,useEffect} from "react";
function Eg1(){
    const [cnt,setcnt] = useState(0);
    useEffect(()=>{
        console.log(`${cnt}`);
    },[cnt]);
    return(
        <div>
            <h1>count {cnt}</h1>
            <button onClick={()=>setcnt(cnt+1)}>Increase Count</button>
        </div>
    );

}
export default Eg1;
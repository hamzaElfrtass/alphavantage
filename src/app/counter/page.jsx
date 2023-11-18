'use client'
import Navbar from "@/components/Navbar";
import { useState } from "react";
function Counter() {
    const [data , setData]  = useState(0)
    return (  
           <div> 
              <Navbar/>
           <button onClick={()=>setData((old)=> old-1)}>--</button>
         <button onClick={()=>setData((old)=> old+1)}>++</button>
            <div className="text-2xl">{data}</div>
    </div> );
}

export default Counter;
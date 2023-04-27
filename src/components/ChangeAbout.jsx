import React, { useEffect, useState } from "react";

function ChangeAbout(){
   
   const [child,setChild]=useState(1);
   
   function handleClick(){
     setChild(child+1)
     if (child===3){
        setChild(1)
     }
     console.log(child);
   }

   useEffect(()=>{
    switch(child){
        case 1:
            document.getElementById("one").classList.add("showDiv");
            document.getElementById("two").classList.remove("showDiv");
            document.getElementById("three").classList.remove("showDiv");
            break;
        case 2:
            document.getElementById("one").classList.remove("showDiv");
            document.getElementById("two").classList.add("showDiv");
            document.getElementById("three").classList.remove("showDiv");
            break;
        case 3:
            document.getElementById("one").classList.remove("showDiv");
            document.getElementById("two").classList.remove("showDiv");
            document.getElementById("three").classList.add("showDiv");
            break;

    }
   },[child]);

    return(
        <div className="changeAbout">
          <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default ChangeAbout;
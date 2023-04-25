import React, { useEffect, useState }  from "react";
import './DarkToLight.css';

function DarkToLight(){
    const [theme,setTheme] = useState(false);

    function handleClick(){
        setTheme(!theme)
    }

    useEffect(()=>{
        if(theme==true){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark");
        }
    })

    return(
        <div>
            <button onClick={handleClick}>{theme?"Light":"Dark"}</button>
        </div>
    )
}

export default DarkToLight;

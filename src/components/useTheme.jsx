import { useState ,useEffect } from "react";

//Custom HOOK

export default function useTheme(){
    const [theme,setTheme] = useState(false);
    const nodeList = document.querySelectorAll("a")

    function handleClick(){
        setTheme(!theme)
    }

    useEffect(()=>{
        if(theme==true){
            document.body.classList.add("dark");
            for (var i=0;i<nodeList.length;i++){
                nodeList[i].classList.add("darkLinks");
            } 
        }else{
            document.body.classList.remove("dark");
            for ( var i=0;i<nodeList.length;i++){
                nodeList[i].classList.remove("darkLinks");
            } 
        }
    },[theme])

    return {handleClick,theme};
}


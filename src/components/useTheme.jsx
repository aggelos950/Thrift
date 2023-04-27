import { useState ,useEffect } from "react";

//Custom HOOK

export default function useTheme(){
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
    },[theme])

    return {handleClick,theme};
}


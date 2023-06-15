import { useState ,useEffect } from "react";

//Custom HOOK

export default function useTheme(){
    const [isDark, setIsDark] = useState(true);

    useEffect(()=>{
        if(isDark===true){
            document.body.classList.add("dark"); 
        }else{
            document.body.classList.remove("dark");
        }
    },[isDark])

    return { isDark, setIsDark };
}


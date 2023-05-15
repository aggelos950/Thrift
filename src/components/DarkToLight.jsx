import { useContext }  from "react";
import { ThemeContext } from "../App";

function DarkToLight(){
    const { isDark, setIsDark } = useContext(ThemeContext);
    return(
        <div className="darkToLight">
            <button onClick={() => setIsDark(state => !state)}>{isDark?"Light":"Dark"}</button>
        </div>
    )
}

export default DarkToLight;
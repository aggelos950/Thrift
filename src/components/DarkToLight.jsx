import React, { useEffect, useState }  from "react";
import useTheme from "./useTheme";

function DarkToLight(){
    const {theme,handleClick} = useTheme();
    return(
        <div className="darkToLight">
            <button onClick={handleClick}>{theme?"Light":"Dark"}</button>
        </div>
    )
}

export default DarkToLight;

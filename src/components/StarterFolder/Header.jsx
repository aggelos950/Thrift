import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext }  from "react";
import { UserContext } from "../../App";

function Header(){
    const user = useContext(UserContext);
     


    return(
        <div className="header">
            <div className="logo">
            <Link to="/">Thrift Fest</Link>
            </div>
            <nav>
            <ul>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/about">Info</Link></li>
                <li><Link to="/user">Login</Link></li>
             </ul>
            </nav>  
        </div>
    );
}

export default Header;
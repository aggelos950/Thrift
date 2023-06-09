import React from "react";
import { Link } from "react-router-dom";
import { useContext }  from "react";
import { UserContext } from "../../App";

function Header(){
    const {user} = useContext(UserContext);
    
     function logout(){
        localStorage.clear()
        window.location.reload();
     }

    return(
        <div className="header">
            <div className="logo">
            <Link to="/">Thrift Fest</Link>
            </div>
            <nav>
            <ul>
                {user === "admin" && <li><Link to="/adminPanel">Admin Panel</Link></li>}
                {user !== "admin" && <li><Link to="/events">Events</Link></li>}
                {user !== "admin" && <li><Link to="/about">Info</Link></li>}
                {user !== null && <li><Link to="/profile">Profile</Link></li>}
                {user === null ? <li><Link to="/user">Login</Link></li> : <li onClick={logout}><Link to="/user">Logout</Link></li>}
             </ul>
            </nav>  
        </div>
    );
}

export default Header;
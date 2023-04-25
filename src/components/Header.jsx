import React from "react";

function Header(){
    return(
        <div className="header">
            <div className="logo">
            <h1>Thrift Fest</h1>
            </div>
            <nav>
            <ul>
                <li><a href="#">Events</a></li>
                <li><a href="#">Info</a></li>
                <li><a href="#">Login</a></li>
             </ul>
            </nav>  
        </div>
    );
}

export default Header;
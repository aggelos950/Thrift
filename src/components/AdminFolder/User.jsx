import { useState } from "react";


function User(props) {

const [upUsername,setUpUsername] = useState(props.username);
const [upEmail,setEmail] = useState(props.email);
const [upPass,setUpPass] = useState(props.password);


    return(
            <div className="userDiv">
                <input className="nameInput" value={upUsername}  onChange={(e)=>{setUpUsername(e.target.value)}}></input>
                <label className="adminLabels">Email:</label>
                <input className="detInput" value={upEmail} onChange={(e)=>{setEmail(e.target.value)}} ></input>
                <label className="adminLabels">Password:</label>
                <input className="detInput" value={upPass} onChange={(e)=>{setUpPass(e.target.value)}}></input>
                <button onClick={(e)=>props.handleClick1(props.id,upUsername,upEmail,upPass)}>Change</button> 
                <button onClick={(e)=>props.handleClick2(props.id)}>Delete</button> 
            </div>
    )
}

export default User;
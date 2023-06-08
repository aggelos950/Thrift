import '../../styles/adminPage.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import User from './User';

function AdminUsers(){

    const [userList,setUserList] = useState([]);
    const [userN,setUserN] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:3001/users").then((response)=>{
            setUserList(response.data);
        })
    },[userList]);

    function addUser(){
        Axios.post("http://localhost:3001/newUserAdmin",
        { 
            username:userN,
            email,
            password:pass,
        }).then((response) =>{
            setUserN("");
            setEmail("");
            setPass("");
        })
    }


    function updateUser(){
        console.log("fregregerger")
        // Axios.post("http://localhost:3001/userUpdate",{ 
        //     _id:id,
        //     username:userN,
        //     email,
        //     password:pass
        // }).then((response)=>{
        //     if (response){
        //         alert("User Info Updated");
        //     }
        // })
    }
 
    function deleteUser(id){
        Axios.post("http://localhost:3001/userDelete",{id})
        .then((response)=>{
            console.log(response);
        })
    }

    return(
        <div className="adminUsers">
            <h1>Creation of new user</h1>
            <h3>Insert data to the empty fields and clik Add</h3>
            <form action="Post">
                <div className="userDivForm">
                    <label>Username:</label>
                    <input className="nameInput" value={userN} onChange={(e) => {setUserN(e.target.value)}}></input>
                    <label>Email:</label>
                    <input className="detInput" value={email}  onChange={(e) => {setEmail(e.target.value)}}></input>
                    <label>Password:</label>
                    <input className="detInput" value={pass} onChange={(e) => {setPass(e.target.value)}}></input>
                </div>
                <button type='button' className='addBtn' onClick={addUser}>Add</button>
            </form>
            <h1>Users In The System</h1>
            {userList.map((user) =>
                 <User 
                    key={user._id}
                    id={user._id}
                    username={user.username}
                    email={user.email}
                    password={user.password}
                    handleClick1={updateUser}
                    handleClick2={deleteUser}
                />
            )}
        </div>
    )
} 

export default AdminUsers;
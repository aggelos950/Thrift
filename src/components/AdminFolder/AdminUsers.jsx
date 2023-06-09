import '../../styles/adminPage.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import User from './User';

function AdminUsers(){

    const [userList,setUserList] = useState([]);


    const [username,setUsername] = useState("");
    const [emaill,setEmaill] = useState("");
    const [password,setPassword] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:3001/users").then((response)=>{
            setUserList(response.data);
        })
    },[userList]);

    function addUser(){
        Axios.post("http://localhost:3001/newUserAdmin",
        { 
            username,
            email:emaill,
            password,
        }).then((response) =>{
            setUsername("");
            setEmaill("");
            setPassword("");
        })
    }


    function updateUser(id,username,email,password){
        Axios.post("http://localhost:3001/userUpdate",{ 
            id,
            username,
            email,
            password
        }).then((response)=>{
            if (response){
                alert("User Info Updated");
            }
        })
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
                    <label className="adminLabels">Username:</label>
                    <input className="nameInput" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                    <label className="adminLabels">Email:</label>
                    <input className="detInput" value={emaill}  onChange={(e) => {setEmaill(e.target.value)}}></input>
                    <label className="adminLabels">Password:</label>
                    <input className="detInput" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
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
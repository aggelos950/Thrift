import '../../styles/adminPage.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import User from './User';

function AdminUsers(){

    const [userList,setUserList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/users").then((response)=>{
            setUserList(response.data);
            
        })
    },[userList]);

    function addUser(){
    }
 

    return(
        <div className="adminUsers">
            <h1>Users In The System</h1>
            {userList.map((user) =>
                 <User 
                    key={user._id}
                    username={user.username}
                    email={user.email}
                    password={user.password}
                />
            )}
            <h1>Creation of new user</h1>
            <h3>Insert data to the empty fields and clik Add</h3>
            <form action="Post">
                <User 
                username=""
                email=""
                password=""
               
                />
                <button type='button' className='addBtn' onClick={addUser}>Add</button>
            </form>
            
        </div>
    )
} 

export default AdminUsers;
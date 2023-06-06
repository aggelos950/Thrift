import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

function SignUp(){
    var UsernameGenerator = require('username-generator');

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();


    const userRandomName = UsernameGenerator.generateUsername("_");

    function navigateProfile(event){
        event.preventDefault();
        Axios.post("http://localhost:3001/user/signup",
        { 
            username,
            email,
            password,
        }).then((response) =>{
            alert("User Registered");
            navigate('/user/login')
        })
    }


    return(
    <div className='login'>
        <form action="">
             <label>Username</label>
             <input type="text" value={userRandomName} onChange={(e)=>{setUsername(e.target.value)}} disabled={true}/>
             <label>Email</label>
             <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
             <label>Password</label>
             <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/>
             <button onClick={(event) => navigateProfile(event)}>Register</button>
        </form>
    </div>
    );
}

export default SignUp; 
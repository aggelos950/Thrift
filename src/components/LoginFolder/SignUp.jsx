import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios"

function SignUp(){

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    function navigateProfile(){
        Axios.post("http://localhost:3001/user/signup",
        { 
            username,
            email,
            password,
        }).then((response) =>{
            alert("User Registered");
        })
        navigate('/user/login')
    }


    return(
    <div className='login'>
             <label>Username</label>
             <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
             <label>Email</label>
             <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
             <label>Password</label>
             <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/>
             <button onClick={navigateProfile}>Register</button>
    </div>
    );
}

export default SignUp; 
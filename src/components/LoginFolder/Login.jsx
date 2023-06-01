import { useState } from 'react';
import '../../styles/loginSignUp.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

function Login(){

    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function navigateProfile(event){
         event.preventDefault();
        Axios.post("http://localhost:3001/user",
    {
        username:username,
        password:password
    }).then((response) => {
        let anwser = response.data;
        if (anwser) {
            localStorage.setItem("user",username);
            alert("Welcome " + username + " !!!");
            navigate("/profile");
        }else{
            alert("User Error");
            setUsername("");
            setPassword("");
        } 
    })
    }

    

    return(
        <div className="login">
            <form>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <button onClick={(event) => navigateProfile(event)}>Log in</button>
            </form>    
        </div>
    );
}

export default Login; 
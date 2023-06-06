import { useContext, useEffect, useState }  from "react";
import { UserContext } from "../../App";
import Axios from "axios";


function Profile(){
    
    const {user:loginUser,updateUser} = useContext(UserContext);
    const [userList,setUserList] = useState([]);
    
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    useEffect(() => {
       Axios.get(`http://localhost:3001/users/${loginUser}`).then((response) =>{
          const initialUser = response.data;
          setUsername(initialUser.username);
          setEmail(initialUser.email);
        })
    },[]);


    function updateData(){
        Axios.post("http://localhost:3001/users",{ 
            loginUser,
            username,
            email,
            password
        }).then((response)=>{
            if (response){
                updateUser(response.data.username)
                alert("User Info Updated");
            }
        })
    }

    return(
        <div className='login'>
            <h1>Your Profile</h1>
        <form action="">
             <label>Username</label>
             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
             <label>Email</label>
             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
             <label>Password</label>
             <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
             <button onClick={updateData} type="button">Change</button>
        </form>
    </div>
    );
}

export default Profile; 
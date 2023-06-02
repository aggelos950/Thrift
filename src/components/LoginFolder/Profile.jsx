import { useContext }  from "react";
import { UserContext } from "../../App";



function Profile(){
    
    const user = useContext(UserContext);
     

    function updateData(){
        
    }

    return(
        <div className='login'>
            <h1>Your Profile</h1>
        <form action="">
             <label>Username</label>
             <input type="text" />
             <label>Email</label>
             <input type="text" />
             <label>Password</label>
             <input type="text" />
             <button onClick={updateData}>Change</button>
        </form>
    </div>
    );
}

export default Profile; 
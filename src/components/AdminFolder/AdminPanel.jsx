import { useNavigate } from "react-router-dom";
import '../../styles/adminPage.css';

function AdminPanel(){


    const navigate = useNavigate();


 function goToUsers(){
     navigate("/adminUsers");
 }

 function goToEvents(){
    navigate("/adminEvents");
 }


    return(
        <div className="admin">
            <h1>Here you can manage :</h1>
            <button onClick={goToUsers}>Users</button>
            <button onClick={goToEvents}>Events</button>
        </div>
    )
} 

export default AdminPanel;
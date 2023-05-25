import '../../styles/loginSignUp.css';
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();

    function navigateProfile(){
        navigate('/profile')
    }

    return(
        <div className="login">
             <label>Username</label>
             <input />
             <label>Password</label>
             <input />
             <button onClick={navigateProfile}>Log in</button>
        </div>
    );
}

export default Login; 
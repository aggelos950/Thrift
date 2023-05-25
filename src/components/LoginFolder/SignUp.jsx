import { useNavigate } from 'react-router-dom';

function SignUp(){


    const navigate = useNavigate();

    function navigateProfile(){
        navigate('/user/login')
    }


    return(
    <div className='login'>
             <label>Username</label>
             <input />
             <label>Email</label>
             <input />
             <label>Password</label>
             <input />
             <button onClick={navigateProfile}>Register</button>
    </div>
    );
}

export default SignUp; 
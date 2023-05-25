import { Link,Outlet } from 'react-router-dom';
import '../styles/loginSignUp.css'


function User(props){
    return(
        <div className='divUser'>
            <Link to='/user/login' className='loginLink'>Login </Link>
            <Link to='/user/signup' > | SignUp</Link>
            <Outlet />
        </div>
    );
}

export default User; 
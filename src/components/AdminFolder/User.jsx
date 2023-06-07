

function User(props) {
    return(
        <div>
            <div className="userDiv">
                <input className="nameInput" value={props.username}  ></input>
                <label>Email:</label>
                <input className="detInput" value={props.email}  ></input>
                <label>Password:</label>
                <input className="detInput"value={props.password} ></input>
                <button>Change</button> 
                <button>Delete</button> 
            </div>
            
        </div>
        
    )
}

export default User;
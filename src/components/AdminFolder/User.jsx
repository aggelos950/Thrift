

function User(props) {

    function handleChange(event){
        console.log(event.target);
    }

    

    return(
            <div className="userDiv">
                <input className="nameInput" value={props.username}  onChange={handleChange}></input>
                <label>Email:</label>
                <input className="detInput" value={props.email} onChange={handleChange} ></input>
                <label>Password:</label>
                <input className="detInput" value={props.password} onChange={handleChange}></input>
                <button onClick={props.handleClick1}>Change</button> 
                <button onClick={(e)=>props.handleClick2(props.id)}>Delete</button> 
            </div>
    )
}

export default User;
import { useState,useEffect } from "react";
import Axios from "axios";
import Event from "./Event";

function AdminEvents(){

    const [eventList,setEventList] = useState([]);

    const [imageName,setImageName] = useState("");

    const [passed,setPassed] = useState(true);
    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    const [desc,setDesc] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/events").then((response) => {
                setEventList(response.data);
        })
    },[eventList]);

    function addUser(){
        Axios.post("http://localhost:3001/newEventAdmin",
        { 
            imageName,
            title,
            date,
            desc,
            passed
        }).then((response) =>{
            setTitle("");
            setDate("");
            setImageName("");
            setDesc("");
            setPassed(true);
        })
    }


    function updateUser(id,username,email,password){
        Axios.post("http://localhost:3001/eventUpdate",{ 
           
        }).then((response)=>{
            if (response){
                alert("User Info Updated");
            }
        })
    }
 
    function deleteUser(id){
        Axios.post("http://localhost:3001/eventDelete",{id})
        .then((response)=>{
            console.log(response);
        })
    }


    function fileSelectedHnadler(event){
        setImageName(event.target.files[0].name);
    }

    function handleChange(e) {
        let boolString = "true"
        var selectValue = (boolString===e.target.value);
        setPassed(selectValue);
    }

    return(
        <div className="adminEventsDiv">
            <h1>Creation of new events</h1>
            <h3>Insert data to the empty fields and clik Add</h3>
            <form method="POST" action="/newEventAdmin" enctype="multipart/form-data" >
                <div className="eventsDivForm">
                    <label className="adminLabels">Image:</label>
                    <input type="file" name="image" onChange={fileSelectedHnadler} />
                    <label className="adminLabels">Title:</label>
                    <input className="detInput" value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
                    <label className="adminLabels">Date:</label>
                    <input className="detInput" value={date}  onChange={(e) => {setDate(e.target.value)}}></input>
                    <label className="adminLabels">Description:</label>
                    <textarea className="detInput" rows="3" cols="65" value={desc} onChange={(e) => {setDesc(e.target.value)}}></textarea>
                    <label className="adminLabels">Passed:</label>
                    <select onChange={handleChange}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <button type='button' className='addBtn' onClick={addUser}>Add</button>
            </form>
            <h1>Events In The System</h1>
            {eventList.map((event) =>
                 <Event 
                    key={event._id}
                    id={event._id}
                    img={event.src} 
                    title={event.title} 
                    date={event.date} 
                    desc={event.description} 
                    handleClick1={updateUser}
                    handleClick2={deleteUser}
                />
            )}
        </div>
    )
} 

export default AdminEvents;
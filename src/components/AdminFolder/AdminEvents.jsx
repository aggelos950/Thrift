import { useState,useEffect } from "react";
import Axios from "axios";
import Event from "./Event";
import { useRef } from "react";

function AdminEvents(){

    const [eventList,setEventList] = useState([]);
    
    const imageRef = useRef(null)

    const [image,setImage] = useState(null);

    const [passed,setPassed] = useState(true);
    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    const [desc,setDesc] = useState("");

    function getEvents(){
        Axios.get("http://localhost:3001/events").then((response) => {
            setEventList(response.data);
    })
    }

    useEffect(() => {
       getEvents();
    },[]);

    function addEvent(){

        const data = { 
            image,
            title,
            date,
            desc,
            passed,
        }
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}

        Axios.post("http://localhost:3001/newEventAdmin",data,config).then((response) =>{
            setTitle("");
            setDate("");
            setImage(null);
            imageRef.current.value = null ;
            setDesc("");
            setPassed(true);
            setEventList((prev)=>([
                ...prev,response.data
            ]))
        })
    }


    function updateEvent(id,title,date,desc){
        Axios.post("http://localhost:3001/eventUpdate",{ 
           id,
           title,
           date,
           desc
        }).then((response)=>{
            if (response){
                alert("Event Info Updated");
                getEvents();
            }
        })
    }
 
    function deleteEvent(id){
        Axios.post("http://localhost:3001/eventDelete",{id})
        .then((response)=>{
            setEventList((prev)=>
                prev.filter((event)=>event._id!==id)
            )
        })
    }


    function fileSelectedHnadler(event){
        setImage(event.target.files[0]);
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
            <form>
                <div className="eventsDivForm">
                    <label className="adminLabels">Image:</label>
                    <input type="file" onChange={fileSelectedHnadler} ref={imageRef}/>
                    <label className="adminLabels">Title:</label>
                    <input className="detInput" value={title} placeholder="New title" onChange={(e) => {setTitle(e.target.value)}}></input>
                    <label className="adminLabels">Date:</label>
                    <input className="detInput" value={date} placeholder="month/day/year"  onChange={(e) => {setDate(e.target.value)}}></input>
                    <label className="adminLabels">Description:</label>
                    <textarea className="detInput" placeholder="New description" rows="3" cols="65" value={desc} onChange={(e) => {setDesc(e.target.value)}}></textarea>
                    <label className="adminLabels">Passed:</label>
                    <select onChange={handleChange}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <button type='button' className='addBtn' onClick={addEvent}>Add</button>
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
                    handleClick1={updateEvent}
                    handleClick2={deleteEvent}
                    getEvents={getEvents}
                />
            )}
        </div>
    )
} 

export default AdminEvents;
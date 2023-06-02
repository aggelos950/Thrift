import Event from "./Event";
import Events from "../../pages/Events";
import { useState,useMemo } from "react";
import Axios from "axios";
import { useEffect } from "react";

function PassedEvents(){
    const [searchFilter,setSearchFilter] = useState(null);
    const [eventList,setEventList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/events").then((response) => {
                setEventList(response.data);
        })
    },[]);


   

    const filteredEvents = useMemo(() => {
        if (searchFilter !== null && searchFilter !== '') {
            return eventList
                .filter(event => event.title.toLocaleLowerCase().includes(searchFilter)
            )
        }
        else {
            return eventList;
        }
    }, [searchFilter,eventList]);

    return (
        <Events func={setSearchFilter}>
        {filteredEvents
        .filter(event=>event.passed)
        .map((event)=>(
            <Event 
                key={event._id} 
                img={event.src} 
                title={event.title} 
                date={event.date} 
                desc={event.description} 
                passed={event.passed}
            />
        ))}
        </Events>
    )
}

export default PassedEvents;
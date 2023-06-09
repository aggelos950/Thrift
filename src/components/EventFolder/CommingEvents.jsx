import React, { useEffect } from 'react';
import Event from "./Event";
import { useState, useMemo } from 'react';
import Events from '../../pages/Events';
import EventModal from './EventModal';
import Axios from "axios";
import { useContext }  from "react";
import { UserContext } from "../../App";
import { useNavigate } from 'react-router-dom';


function CommingEvents() {
    const [searchFilter,setSearchFilter] = useState("");
    const [selectedEvent,setSelectedEvent] = useState(null);
    const [eventList,setEventList] = useState([]);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

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
            return eventList
        }
    }, [searchFilter,eventList]);

    return (
        <Events func={setSearchFilter} searchFilter={searchFilter} >
           {
                filteredEvents
                .filter(event=>!event.passed)
                .map((event)=>(
                    <Event 
                        key={event._id}
                        id={event._id}
                        img={event.src} 
                        title={event.title} 
                        date={event.date} 
                        desc={event.description} 
                        passed={event.passed} 
                        handleClick={() =>
                             { if (user!==null){
                                 setSelectedEvent(event)
                             }else{
                                 navigate("/user");
                             }              
                            }}
                    />
                ))
            }
            <EventModal
                user={user}
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </Events>
    )
}

export default CommingEvents;



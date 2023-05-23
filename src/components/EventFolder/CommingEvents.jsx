import React from 'react';
import Event from "./Event";
import dataEvents from "./eventData";
import { useState } from 'react';
import Events from '../../pages/Events';
import EventModal from './EventModal';



function CommingEvents() {
    const [searchFilter,setSearchFilter] = useState(null);
    const [selectedEvent,setSelectedEvent] = useState(null);
    
    return (
        <Events func={setSearchFilter} >
           {
                dataEvents
                .filter(event=>event.title.toLocaleLowerCase().includes(searchFilter))
                .filter(event=>!event.passed)
                .map((event)=>(
                    <Event 
                        key={event.id}
                        id={event.id}
                        img={event.src} 
                        title={event.title} 
                        date={event.date} 
                        desc={event.description} 
                        passed={event.passed} 
                        handleClick={() => setSelectedEvent(event)}
                    />
                ))
            }
            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </Events>
    )
}

export default CommingEvents;



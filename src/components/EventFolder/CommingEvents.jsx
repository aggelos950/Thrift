import React from 'react';
import Event from "./Event";
import dataEvents from "./eventData";
import { useState, useMemo } from 'react';
import Events from '../../pages/Events';
import EventModal from './EventModal';



function CommingEvents() {
    const [searchFilter,setSearchFilter] = useState(null);
    const [selectedEvent,setSelectedEvent] = useState(null);
    
    const filteredEvents = useMemo(() => {
        if (searchFilter !== null && searchFilter !== '') {
            return dataEvents
                .filter(event => event.title.toLocaleLowerCase().includes(searchFilter)
            )
        }
        else {
            return dataEvents
        }
    }, [searchFilter]);

    return (
        <Events func={setSearchFilter} searchFilter={searchFilter} >
           {
                filteredEvents
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



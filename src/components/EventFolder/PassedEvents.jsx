import Event from "./Event";
import Events from "../../pages/Events";
import dataEvents from "./eventData";
import { useState,useMemo } from "react";

function PassedEvents(){
    const [searchFilter,setSearchFilter] = useState(null);
   

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
        <Events func={setSearchFilter}>
        {filteredEvents
        .filter(event=>event.passed)
        .map((event)=>(
            <Event 
                key={event.id} 
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
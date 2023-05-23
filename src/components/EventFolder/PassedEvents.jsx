import Event from "./Event";
import Events from "../../pages/Events";
import dataEvents from "./eventData";
import { useState } from "react";

function PassedEvents(){
    const [searchFilter,setSearchFilter] = useState(null);

    return (
        <Events func={setSearchFilter}>
        {dataEvents
        .filter(event=>event.title.toLocaleLowerCase().includes(searchFilter))
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
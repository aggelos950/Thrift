import Event from "./Event";
import Events from "../pages/Events";
import dataEvents from "./eventData";

function PassedEvents(){


    return (
        <Events>
        {dataEvents
        .filter(event=>event.passed)
        .map((event)=>  (
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
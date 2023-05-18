import Event from "./Event";
import dataEvents from "./eventData";


function PassedEvents(){

   

    return (
        dataEvents
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
        ))
    )
}

export default PassedEvents;
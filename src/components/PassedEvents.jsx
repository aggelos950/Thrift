import Event from "./Event";
import dataEvents from "./eventData";


function PassedEvents(){
    return (
        dataEvents.map((event)=>{
            if (!event.passed){
                return(<Event key={event.id} img={event.src} title={event.title} date={event.date} desc={event.description}/>);
            }
        }) 
    )
}

export default PassedEvents;
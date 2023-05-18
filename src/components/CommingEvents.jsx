import { useContext } from "react";
import Event from "./Event";
import dataEvents from "./eventData";
import {SearchContext} from "../pages/Events"

function CommingEvents(){
    const search = useContext(SearchContext);

    console.log(search)
    function handleClick(){
        console.log("rgteryg5hy"); 
    }
       
        return (
            dataEvents
            .filter(event=>!event.passed)
            .filter(event=>event.title.match(search))
            .map((event)=>(
                <Event 
                    key={event.id}  
                    img={event.src} 
                    title={event.title} 
                    date={event.date} 
                    desc={event.description} 
                    passed={event.passed} 
                    handleClick={handleClick} 
                />
            )) 
        )
    }

export default CommingEvents;
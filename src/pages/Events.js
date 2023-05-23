import { Link, Outlet } from 'react-router-dom';
import '../styles/eventsPage.css';
import { useEffect, useState } from 'react';


function Events(props) {

    const [eventFilter,setEventFilter] = useState("");

    function handleChange(event){
        setEventFilter(event.target.value.toLowerCase());
    }

    useEffect(()=>{
        props.func(eventFilter);
     },[eventFilter]);
   

    return (
        
            <div className='eventsContentDiv'>
                <input type='search' placeholder='Search Event' className='searchBar' onChange={handleChange} value={eventFilter}/>
                <div className='linkDiv'>
                    <Link to='/events/passedEvents' className='listLink'>Passed Events</Link>
                    <Link to='/events/commingEvents' className='listLink'>| Comming Soon!!!</Link>
                </div>
                    
                    <div className='allEventDiv'>
                       {props.children}
                    </div>
                    
            </div>
        
    );
}



export default Events;

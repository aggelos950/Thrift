import { Link, Outlet } from 'react-router-dom';
import '../styles/eventsPage.css';
import { useState, createContext } from 'react';


export const SearchContext = createContext(null);

function Events() {
     const [eventFilter,setEventFilter] = useState("");




    function handleChange(event){
        setEventFilter(event.target.value);
    }

    return (
        <SearchContext.Provider value={eventFilter}>
            <div className='eventsContentDiv'>
                <input type='search' placeholder='Search Event' className='searchBar' onChange={handleChange} value={eventFilter}/>
                <div className='linkDiv'>
                    <Link to='passedEvents' className='listLink'>Passed Events</Link>
                    <Link to='commingEvents' className='listLink'>| Comming Soon!!!</Link>
                </div>
                    
                    <div className='allEventDiv'>
                        <Outlet />
                    </div>
                    
            </div>
        </SearchContext.Provider>
    );
}



export default Events;

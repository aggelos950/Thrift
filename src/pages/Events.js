import { Link } from 'react-router-dom';
import '../styles/eventsPage.css';


function Events(props) {

    function handleChange(event){
        props.func(event.target.value.toLowerCase());
    }

    
    return (
        
            <div className='eventsContentDiv'>
                <input type='search' placeholder='Search Event' className='searchBar' onChange={handleChange} value={props.searchFilter}/>
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

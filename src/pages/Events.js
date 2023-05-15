import Layout from '../components/Layout';
import { Link, Outlet } from 'react-router-dom';
import '../styles/eventsPage.css';

function Events() {
    return (
        <div className='eventsContentDiv'>
            <input type='search' placeholder='Search Event' className='searchBar' />
            <div className='linkDiv'>
                <Link to='passedEvents' className='listLink'>Passed Events</Link>
                <Link to='commingEvents' className='listLink'>| Comming Soon!!!</Link>
            </div>
            <div className='allEventDiv'>
                <Outlet />
            </div>

        </div>
    );
}

export default Events;
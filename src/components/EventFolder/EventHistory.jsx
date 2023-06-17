import { useContext, useEffect, useState }  from "react";
import { UserContext } from "../../App";
import Reservation from "./Reservation";
import Axios from "axios";


function EventsHistory(){

const [reservations,setReservations] = useState([]);
const {user} = useContext(UserContext);

useEffect(()=>{
    Axios.get("http://localhost:3001/reservations").then((response)=>{
        setReservations(response.data);
    })
},[])


    return(
        <div className="reservationsDiv">
            {reservations
                .filter((reserv)=>reserv.username===user)
                .map((reservation) => 
                    <Reservation 
                        key={reservation._id}
                        people={reservation.attendants}
                        ticket={reservation.type_ticket}
                        event={reservation.event_id}
                        total={reservation.total}
                        email={reservation.email}
                        ticket_code={reservation.ticket_code}
                    />)
            }
        </div>
    )


} 

export default EventsHistory;

import Axios from "axios";
import { useEffect, useState,useRef } from "react";
import emailjs from '@emailjs/browser';



function Reservation(props){


    const [reservEvent,setReservEvent] = useState({});
    const form = useRef();

    useEffect(()=>{
        Axios.get(`http://localhost:3001/reservEvent/${props.event}`).then((response)=>{
        setReservEvent(response.data);
    })
    },[])


    function reSendEmail(){
        const eventDate = new Date(reservEvent.date);
        const nowDATE = new Date();
        if (eventDate>=nowDATE){
            emailjs.sendForm('service_v3yth2a','template_1egcibp',form.current,"YHeQCF06nkbiJkeFf").then((result) => {
                console.log(result.text);
                alert("Your ticket code was re-send to your email!!")
            }, (error) => {
                console.log(error.text);
            });
        }else{
            alert("Can't send email for passed event");
        }
        
    }

    
    return(
        <div className="reservationDiv">
            <h1>|| Reservation || </h1>
            <hr />
            <h2>This reservation was made for {props.people} {props.people>1?"people":"person"}</h2>
            <h2>The "{props.ticket}" tickets are for the {reservEvent.title} event</h2>
            <hr />
            <h2>You paid {props.total} in total</h2>
            <form ref={form}>
                <input type='hidden' name='email' value={props.email} />
                <input type="hidden" value={props.ticket_code} name='ticketCode'/>
                <button className="reSendEmailBtn" type="button" onClick={reSendEmail}>Re-send email</button>
            </form>
            
        </div>
    )
}

export default Reservation;
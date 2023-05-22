import React from 'react';
import Modal from 'react-modal';
import Event from "./Event";
import dataEvents from "./eventData";
import { useState } from 'react';
import Events from '../pages/Events';
import Image from './Image';



function CommingEvents() {

    const [selectedEvent,setSelectedEvent] = useState(null);
    return (
        <Events>
           {
                dataEvents
                .filter(event=>!event.passed)
                .map((event)=>(
                    <Event 
                        key={event.id}
                        id={event.id}
                        img={event.src} 
                        title={event.title} 
                        date={event.date} 
                        desc={event.description} 
                        passed={event.passed} 
                        handleClick={() => setSelectedEvent(event)}
                    />
                ))
            }
            <EventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </Events>
    )
}

export default CommingEvents;


const EventModal = ({ event, onClose }) => {

    function  componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    
   function  componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    if (event===null){
        componentWillUnmount();
        return null;
    } else{
        componentDidMount();
    }

    return (
        <Modal isOpen={true} onRequestClose={onClose} ariaHideApp={false} style={{
            overlay:{
                background: "rgba(49,49,49,0.8)"
            },
            content:{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'grey',
                padding: '14px 28px',
                borderRadius: '3px',
                height:'550px',
                width:'450px',
                textAlign:'center'
            }
        }}>
            <div className='modal'>
                <Image dest={event.src} />
                <h1>{event.title}</h1>
                <h2>{event.date}</h2>
                <h4>{event.description}</h4>
            </div>
            <form action="">
                <label>Attendats: </label>
                <select id="" name="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </form>
            <button className='modalBtn' onClick={onClose}>Close</button>
        </Modal>
    )
}
import React from 'react';
import Modal from 'react-modal';
import Image from '../SimpleElementsFolder/Image';



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
            <hr />
            <form action="">
                <h1>Book your spot</h1>
                <div className='attendats'>
                    <label>Attendats: </label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className='typeTicket'>
                    <input type="radio" value="normal" name="gender" /> Normal
                    <input type="radio" value="student" name="gender" /> Premnium
                    <input type="radio" value="unemploye" name="gender" /> VIP
                </div>
                <button className='formBtn'>Next</button>
                <div className='info'>
                <hr />
                   <input type='text'placeholder='Name'/>
                   <input type='text'placeholder='Surname'/>
                   <input type='text'placeholder='Age'/>
                   <button className='formBtn'>Next</button>
                </div>
                <div className='info'>
                <hr />
                   <input type='text'placeholder='Email'/>
                   <input type='text'placeholder='Card Number'/>
                   <input type='text'placeholder='Security Code'/>
                   <select className='banks'>
                        <option value="Eurobank">Eurobank</option>
                        <option value="Optima">Optima</option>
                        <option value="Alfa">Alfa</option>
                        <option value="Revolut">Revolut</option>
                   </select>
                   <button type='submit' className='formBtn'>Book</button>
                </div>
            </form>
            <button className='modalBtn' onClick={onClose}>Close</button>
        </Modal>
    )
}

export default EventModal;
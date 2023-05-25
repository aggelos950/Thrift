import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Image from '../SimpleElementsFolder/Image';



const EventModal = ({ event, onClose }) => {


//useStates
    const [isOpen,setIsOpen] = useState(false);
    const [isVisible,setIsVisible] = useState(false);
    const [selected,setSelected] = useState(1);
    const [ticketSelected,setTicketSelected] = useState("");
    const [total,setTotal] = useState("0$");
    const [inputFields,setInputFields] = useState([
        {name:'',surname:'',age:''}
    ])






//functions
 
    function  componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    
    function  componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    function onChange1(event){
      setSelected(event.target.value);
    }


    function onChange2(event){
        setTicketSelected(event.target.value);
     }
     
      

    function handleFormChange(index,event){
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }


    function handleClick1(event){
        event.preventDefault();
        setIsOpen(!isOpen);
    }
    function handleClick2(event){
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        var newInputFields = [];
        for (var i = 0; i<selected; i++) {
            newInputFields.push({name:'',surname:'',age:''})
        }
        setInputFields(newInputFields);

        if (ticketSelected==="vip"){
           setTotal(5*selected+"$");

        }else if (ticketSelected==="prem"){
            setTotal(2*selected+"$");

        }else{
            setTotal(1*selected+"$");
        }


    }, [selected,ticketSelected]); 

    if (event===null){
        componentWillUnmount();
        return null;
    } else{
        componentDidMount();
    }

    //return statement
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
                    <select onChange={onChange1} disabled={isOpen} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                
                <div className='typeTicket'>
                    <input type="radio" value="norm" name="gender" disabled={isOpen} onChange={onChange2}/> Normal
                    <input type="radio" value="prem" name="gender" disabled={isOpen} onChange={onChange2}/> Premnium
                    <input type="radio" value="vip" name="gender" disabled={isOpen} onChange={onChange2}/> VIP
                </div>
                <button onClick={handleClick1} className='formBtn'>{isOpen?"Change":"Next"}</button>


               
                {isOpen && <div className='info'>
                <hr />
                {inputFields.map((input,index)=>{
                    return(
                        <div key={index}>
                            <input type='text'placeholder='Name' name='name' disabled={isVisible} value={input.name} onChange={event => handleFormChange(index,event)}/>
                            <input type='text'placeholder='Surname' name='surname' disabled={isVisible} value={input.surname} onChange={event => handleFormChange(index,event)}/>
                            <input type='text'placeholder='Age' name='age' disabled={isVisible} value={input.age} onChange={event => handleFormChange(index,event)}/>
                            <br /> <br />
                        </div>
                    );
                })}      
                   <input type='text' value={total} disabled={true} className='total'/>
                   <button onClick={handleClick2} className='formBtn'>{isVisible?"Change":"Next"}</button>
                </div> }

                {isVisible && <div className='info'>
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
                </div>}
            </form>

            <button className='modalBtn' onClick={onClose}>Close</button>
        </Modal>
    )
            }

export default EventModal;
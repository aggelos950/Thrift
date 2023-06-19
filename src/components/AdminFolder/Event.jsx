import { useState } from 'react';
import Image from '../SimpleElementsFolder/Image';
import ImageUpdateModal from './ImageUpdateModal';


function Event(props){

   const [showModal,setShowModal] = useState(false);
   const [upTitle,setUpTitle] = useState(props.title);
   const [upDate,setUpDate] = useState(props.date);
   const [upDesc,setUpDesc] = useState(props.desc);
   const [upPassed,setUpPassed] = useState(true);

   function handleChange(e) {
    let boolString = "true"
    var selectValue = (boolString===e.target.value);
    setUpPassed(selectValue);
}

    return(
        <div className="eventDiv" onClick={props.handleClick}>
               <Image dest={`http://localhost:3001/images/${props.img}`}/>
               <div className="eventInfo">
                   <input className='titleInput' value={upTitle} onChange={(e)=>{setUpTitle(e.target.value)}}/>
                   <input className='dateInput' value={upDate} onChange={(e)=>{setUpDate(e.target.value)}}/>
                   <textarea className='descInput' rows="3" cols="90" value={upDesc} onChange={(e)=>{setUpDesc(e.target.value)}} ></textarea>
               </div>
               <select className='lastSelect' onChange={handleChange}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                </select>
               <button onClick={(e)=>props.handleClick1(props.id,upTitle,upDate,upDesc,upPassed)}>Change info</button> 
               <button onClick={(e=>setShowModal(true))}>Change Image</button>
               <button onClick={(e)=>props.handleClick2(props.id)}>Delete</button> 
               {showModal && <ImageUpdateModal 
                        id={props.id}
                        setShowModal={setShowModal}
                        getEvents = {props.getEvents}
                    />
                }
           </div>
      );
}

export default Event;

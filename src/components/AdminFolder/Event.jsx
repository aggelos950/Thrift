import { useState } from 'react';
import Image from '../SimpleElementsFolder/Image';
import ImageUpdateModal from './ImageUpdateModal';


function Event(props){

   const [showModal,setShowModal] = useState(false);
   const [upTitle,setUpTitle] = useState(props.title);
   const [upDate,setUpDate] = useState(props.date);
   const [upDesc,setUpDesc] = useState(props.desc);

    return(
        <div className="eventDiv" onClick={props.handleClick}>
               <Image dest={`http://localhost:3001/images/${props.img}`}/>
               <div className="eventInfo">
                   <input className='titleInput' value={upTitle} onChange={(e)=>{setUpTitle(e.target.value)}}/>
                   <input className='dateInput' value={upDate} onChange={(e)=>{setUpDate(e.target.value)}}/>
                   <textarea className='descInput' rows="3" cols="90" value={upDesc} onChange={(e)=>{setUpDesc(e.target.value)}} ></textarea>
               </div>
               <button onClick={(e)=>props.handleClick1(props.id,upTitle,upDate,upDesc)}>Change info</button> 
               <button onClick={(e=>setShowModal(!showModal))}>Change image</button>
               <button onClick={(e)=>props.handleClick2(props.id)}>Delete</button> 
               {showModal && <ImageUpdateModal />}
           </div>
      );
}

export default Event;

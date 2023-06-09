import Image from '../SimpleElementsFolder/Image';



function Event(props){

   function handleChange3(){

    }

    return(
        <div className="eventDiv" onClick={props.handleClick}>
               <Image dest={`http://localhost:3001/images/${props.img}`}/>
               <div className="eventInfo">
                   <input className='titleInput' value={props.title} onChange={handleChange3}/>
                   <input className='dateInput' value={props.date} onChange={handleChange3}/>
                   <textarea className='descInput' rows="3" cols="90" value={props.desc} onChange={handleChange3} ></textarea>
                    
               </div>
               <button onClick={(e)=>props.handleClick1(props.id)}>Change</button> 
               <button onClick={(e)=>props.handleClick2(props.id)}>Delete</button> 
           </div>
      );
}

export default Event;

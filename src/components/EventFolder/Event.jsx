
import Image from '../SimpleElementsFolder/Image';
import { useNavigate } from 'react-router';


function Event(props){

const passedClass = props.passed?"passed":"";
const navigate = useNavigate();

    function truncate(text){
    return text.length > 100 ? `${text.substring(0,70)}...`:text;
    }

    function goToComments(){
        navigate('/events/reviewEvents',{
            state: {
                eventId: props.id,
            }
        });
    };

    
    return(
        <div className={`eventDiv ${passedClass}`} onClick={props.handleClick}>
               <Image 
                    dest={`http://localhost:3001/images/${props.img}`}
                />
               <div className="eventInfo">
                   <h1>{props.title}</h1>
                   <h4>{props.date}</h4>
                   <p>{truncate(props.desc)}</p>
               </div>
               <button className='commentBtn' onClick={goToComments}>Comments</button>
           </div>
      );
}

export default Event;

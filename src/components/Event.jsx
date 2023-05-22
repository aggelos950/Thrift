import Image from './Image';



function Event(props){

const passedClass = props.passed?"passed":"";

    return(
        <div id={props.id} className={`eventDiv ${passedClass}`} onClick={props.handleClick}>
               <Image key={props.id} dest={props.img}/>
               <div className="eventInfo">
                   <h1>{props.title}</h1>
                   <h3>{props.date}</h3>
                   <p>{props.desc}</p>
               </div>
           </div>
      );
}

export default Event;

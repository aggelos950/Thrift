import Image from './Image';


function Event(props){
  return(
     <div className="eventDiv">
            <Image key={props.key} dest={props.img} />
            <div className="eventInfo">
                <h1>{props.title}</h1>
                <h3>{props.date}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
   );
}

export default Event;

import Image from "../SimpleElementsFolder/Image";

function Comment(props){
    
    return(
        <div className="commentDiv">
            <h2> Review from: {props.user}</h2>
            <Image dest={`http://localhost:3001/images/${props.image}`} />
            <textarea readOnly value={props.comment}></textarea>
        </div>
    )
}

export default Comment;
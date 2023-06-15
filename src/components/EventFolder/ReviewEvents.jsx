import { useLocation } from "react-router-dom"
import { useContext, useEffect, useState }  from "react";
import { UserContext } from "../../App";
import Comment from "./Comment";
import Axios from 'axios';
import { useRef } from "react";

function ReviewEvents(){

    const location = useLocation();
    const {user} = useContext(UserContext);
    const [eventId,setEventsId] = useState(location.state.eventId);
    const [image,setImage] = useState(null);
    const [formComment,setFormComment] = useState("");
    const imageRef = useRef(null);
    const [comments,setComments] = useState([]);


    useEffect(()=>{
      Axios.get("http://localhost:3001/comment").then((response)=>{
        setComments(response.data);
      })
    },[]);




    function submitComment(){

        const data = {
            user,
            eventId,
            image,
            formComment
        }
        const config = { headers: {
            'Content-Type': 'multipart/form-data'
          }
        }


        Axios.post("http://localhost:3001/comment",data,config).then((response)=>{
            imageRef.current.value = null;
            setFormComment("");
            setComments((prev)=>(
                [...prev,response.data]
            ))
        })
    }

    return(
        
        <div className="commentPageDiv">
            <form>
            <div className="commentDivForm">
                <label>Image:</label>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} ref={imageRef}/><br /><br />
                <label>Comment:</label>
                <textarea name="comment" cols="130" rows="6" value={formComment} onChange={(e)=>{setFormComment(e.target.value)}}></textarea>
                <button type="button" onClick={submitComment}>Submit</button>
            </div>
            </form>
            {comments
            .filter((comment)=>comment.event===eventId)
            .map((comment)=>(
                <Comment 
                    key={comment._id}
                    user={comment.user}
                    image={comment.src}
                    comment={comment.commentText}
                />
            ))}
            
        </div>
    )
} 

export default ReviewEvents;
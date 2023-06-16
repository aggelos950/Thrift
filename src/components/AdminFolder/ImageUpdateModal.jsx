import Axios from "axios";
import { useRef, useState } from 'react';
import Modal from 'react-modal';




function ImageUpdateModal(props){

    const imageRef2 = useRef(null);
    const [image,setImage] = useState(null);

    function handleImage(event){
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);
    }

    function handleClick(){
        const data = {
            id:props.id,
            image
        }

        const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }}

            Axios.post("http://localhost:3001/updateImage",data,config).then((response) =>{
                imageRef2.current.value = null;
                props.setShowModal(false);
                props.getEvents();
            })
           
    }

    function handleClick2(){
        props.setShowModal(false);
    }


return( 
        <Modal isOpen={true}  ariaHideApp={false} style={{
                    overlay:{
                        background: "rgba(49,49,49,0.9)"
                    },
                    content:{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'grey',
                        padding: '14px 28px',
                        borderRadius: '3px',
                        height:'150px',
                        width:'650px',
                        textAlign:'center'
                    }
                    }}>
                    <div className='modal'>
                        <form>
                            <label>Update Image</label><br /><br />
                            <input type="file" onChange={handleImage} ref={imageRef2} /><br />
                            <button className='formBtn' type='button' onClick={handleClick}>Change</button>
                            <button className='modalBtn' type='button' onClick={handleClick2}>Close</button>
                        </form>
                    </div>
    
        </Modal>
)

}

export default ImageUpdateModal;
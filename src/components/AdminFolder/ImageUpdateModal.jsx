import Modal from 'react-modal';



function ImageUpdateModal(){

return( <Modal isOpen={true}  ariaHideApp={false} style={{
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
            <input type="file" /><br />
            <button className='formBtn'>Change</button>
         </form>
    </div>
    
    </Modal>
)

}

export default ImageUpdateModal;
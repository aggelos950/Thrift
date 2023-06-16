

function Reservation(props){
    return(
        <div className="reservationDiv">
            <h1>|| Reservation || </h1>
            <hr />
            <h2>This reservation was made for {props.people} {props.people>1?"people":"person"}</h2>
            <h2>The "{props.ticket}" tickets are for the {props.event} event</h2>
            <hr />
            <h2>You paid {props.total} in total</h2>
            <button className="reSendEmailBtn">Re-send email</button>
        </div>
    )
}

export default Reservation;
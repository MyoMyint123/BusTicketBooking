import React from 'react';


const SeatInvoice = ({ selectedSeats, totalAmount, handleOnPress }) => {

    let seatCount = selectedSeats.length;
    console.log(selectedSeats)

    return(
        <div className="seatInvoice">
            { getSeatCountInfo(seatCount) }
            <div className="selectedSeatBox">
                <div className="selectedSeat">
                    {
                        selectedSeats.map(function(seat, i){
                            return <button className="seat selected" onClick={() => handleOnPress(seat.id)} key={i} >{seat.number} </button>
                        })
                    }
                </div>
                <div className="totalAmount">
                    <div><strong>Total Price:</strong></div>
                    <div>{totalAmount} Ks</div>
                </div>

            </div>
            <div style={{textAlign: 'center', paddingTop: 20}}>
                <button className="bookingButton">Continue Booking</button>
            </div>
        </div>
    );

    function getSeatCountInfo(seatCount){
        if(seatCount == 0) {
            return (
                <h5>Please select <span style={{color: "blueviolet"}}>seats</span>.</h5>
            );
        } else {
            return (
                <h5><span style={{color: "blueviolet"}}>{seatCount} seats</span> have been selected.</h5>
            );
        }
    }

}


export default SeatInvoice;
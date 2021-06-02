import React from 'react';

const Seat = (props) => {

    const { handleOnPress, seat } = props
    return(        

        <button onClick={() => handleOnPress(seat.id)} className={'seat '+ seat.status} disabled={seat.disabled} >{seat.number}</button>

    )
}

export default Seat;

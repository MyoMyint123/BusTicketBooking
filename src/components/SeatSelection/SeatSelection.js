import React, { Component } from 'react';
import { connect } from 'react-redux';
import Seat from './Seat';
import SeatInvoice from './SeatInvoice';
import { loadSeatSuccess, selectSeatSuccess, deselectSeatSuccess } from '../../actions/seatSelectionAction';
import * as seatStatus from '../../constants/seatStatus';
import './seat-layout.css'
import Highlight from './Highlight';
import steeringLogo from './steering.png'


class SeatSelection extends Component {
    constructor(props){
        super(props);
    }


    componentWillMount(){
        this.props.onLoadSeats()
    }

    handleSelectSeat = (id) => {
        return this.props.onSelectSeat(id);
    }

    handleDeselectSeat = (id) => {
        return this.props.onDeselectSeat(id);
    }

    render(){
        const { seats, selectedSeats, totalAmount} = this.props;
        const handleDeselectSeat = this.handleDeselectSeat;
        return(
            <div>
                <div className="seatBooking">
                    <div className="seatLayout">
                        <div className="bus">
                            <img src={steeringLogo} alt="steering" width="80" height="80" />
                            {
                                this.renderSeatLayout(seats)
                            }
                        </div>
                        <div>
                            <div className="seatHighlightWrap">
                                {
                                    seatStatus.SEAT_STATUS.map((status, i) => {
                                        return <Highlight status={status} key={i} />;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="seatInvoiceWrap">
                        <SeatInvoice selectedSeats={selectedSeats} totalAmount={totalAmount} handleOnPress={handleDeselectSeat} />
                    </div>

                </div>
            </div>
        );
    }

    renderSeat = (seat) => {
        let handleOnPress = seat.status == 'available' 
        ? this.handleSelectSeat 
        : this.handleDeselectSeat;
        return <Seat seat={seat} handleOnPress={handleOnPress} key={seat.id} />
    }

    renderSeatLayout = (seats) => {
        return (<table>
                    <tr>
                        <td> { this.renderSeat(seats[3]) } </td>
                        <td> { this.renderSeat(seats[7]) } </td>
                        <td> { this.renderSeat(seats[11]) } </td>
                        <td> { this.renderSeat(seats[15]) } </td>
                        <td> { this.renderSeat(seats[19]) } </td>
                        <td> { this.renderSeat(seats[23]) } </td>
                        <td> { this.renderSeat(seats[27]) } </td>
                        <td> { this.renderSeat(seats[31]) } </td>
                        <td> { this.renderSeat(seats[35]) } </td>
                        <td> { this.renderSeat(seats[39]) } </td>
                        <td> { this.renderSeat(seats[44]) } </td>

                    </tr>
                    <tr>
                        <td> { this.renderSeat(seats[2]) } </td>
                        <td> { this.renderSeat(seats[6]) } </td>
                        <td> { this.renderSeat(seats[10]) } </td>
                        <td> { this.renderSeat(seats[14]) } </td>
                        <td> { this.renderSeat(seats[18]) } </td>
                        <td> { this.renderSeat(seats[22]) } </td>
                        <td> { this.renderSeat(seats[26]) } </td>
                        <td> { this.renderSeat(seats[30]) } </td>
                        <td> { this.renderSeat(seats[34]) } </td>
                        <td> { this.renderSeat(seats[38]) } </td>
                        <td> { this.renderSeat(seats[43]) } </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td> { this.renderSeat(seats[42]) } </td>
                    </tr>
                    <tr>
                        <td> { this.renderSeat(seats[1]) } </td>
                        <td> { this.renderSeat(seats[5]) } </td>
                        <td> { this.renderSeat(seats[9]) } </td>
                        <td> { this.renderSeat(seats[13]) } </td>
                        <td> { this.renderSeat(seats[17]) } </td>
                        <td> { this.renderSeat(seats[21]) } </td>
                        <td> { this.renderSeat(seats[25]) } </td>
                        <td> { this.renderSeat(seats[29]) } </td>
                        <td> { this.renderSeat(seats[33]) } </td>
                        <td> { this.renderSeat(seats[37]) } </td>
                        <td> { this.renderSeat(seats[41]) } </td>
                    </tr>
                    <tr>
                        <td> { this.renderSeat(seats[0]) } </td>
                        <td> { this.renderSeat(seats[4]) } </td>
                        <td> { this.renderSeat(seats[8]) } </td>
                        <td> { this.renderSeat(seats[12]) } </td>
                        <td> { this.renderSeat(seats[16]) } </td>
                        <td> { this.renderSeat(seats[20]) } </td>
                        <td> { this.renderSeat(seats[24]) } </td>
                        <td> { this.renderSeat(seats[28]) } </td>
                        <td> { this.renderSeat(seats[32]) } </td>
                        <td> { this.renderSeat(seats[36]) } </td>
                        <td> { this.renderSeat(seats[40]) } </td>
                    </tr>
                </table>)

    }
}

const mapStateToProps = state => {
	return {
		seats: state.seatSelection.seats,
		selectedSeats: state.seatSelection.selectedSeats,
		totalAmount: state.seatSelection.totalAmount
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onLoadSeats: () => dispatch(loadSeatSuccess()),
        onSelectSeat: (seat_id) => dispatch(selectSeatSuccess(seat_id)),
        onDeselectSeat: (seat_id) => dispatch(deselectSeatSuccess(seat_id)),
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SeatSelection);
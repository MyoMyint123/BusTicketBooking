import { 
    REQUEST_LOAD_SEATS,
    LOAD_SEAT_SUCCESS, 
    REQUEST_SELECT_SEAT, 
    SELECT_SEAT_SUCCESS, 
    REQUEST_DESELECT_SEAT, 
    DESELECT_SEAT_SUCCESS,
} from '../actions/types';

const initialState = {
    totalAmount: 0,
	seats: [
        { id: 1, number: 1, disabled: true, status: 'lady'},   
        { id: 2, number: 2, disabled: true, status: 'lady'},   
        { id: 3, number: 3, disabled: true, status: 'lady'},   
        { id: 4, number: 4, disabled: true, status: 'lady'},   
        { id: 5, number: 5, disabled: true, status: 'blocked'},   
        { id: 6, number: 6, disabled: true, status: 'blocked'},   
        { id: 7, number: 7, disabled: true, status: 'blocked'},   
        { id: 8, number: 8, disabled: true, status: 'blocked'},   
        { id: 9, number: 9, disabled: true, status: 'blocked'},   
        { id: 10, number: 10, disabled: true, status: 'booked'},   
        { id: 11, number: 11, disabled: true, status: 'booked'},   
        { id: 12, number: 12, disabled: true, status: 'booked'},   
        { id: 13, number: 13, disabled: true, status: 'booked'},   
        { id: 14, number: 14, disabled: false, status: 'available'},   
        { id: 15, number: 15, disabled: false, status: 'available'},   
        { id: 16, number: 16, disabled: false, status: 'available'},   
        { id: 17, number: 17, disabled: false, status: 'available'},   
        { id: 18, number: 18, disabled: false, status: 'available'},   
        { id: 19, number: 19, disabled: false, status: 'available'},   
        { id: 20, number: 20, disabled: false, status: 'available'},   
        { id: 21, number: 21, disabled: false, status: 'available'},   
        { id: 22, number: 22, disabled: false, status: 'available'},   
        { id: 23, number: 23, disabled: false, status: 'available'},   
        { id: 24, number: 24, disabled: false, status: 'available'},   
        { id: 25, number: 25, disabled: false, status: 'available'},   
        { id: 26, number: 26, disabled: false, status: 'available'},   
        { id: 27, number: 27, disabled: false, status: 'available'},   
        { id: 28, number: 28, disabled: false, status: 'available'},   
        { id: 29, number: 29, disabled: false, status: 'available'},   
        { id: 30, number: 30, disabled: false, status: 'available'},   
        { id: 31, number: 31, disabled: false, status: 'available'},   
        { id: 32, number: 32, disabled: false, status: 'available'},   
        { id: 33, number: 33, disabled: false, status: 'available'},   
        { id: 34, number: 34, disabled: false, status: 'available'},   
        { id: 35, number: 35, disabled: false, status: 'available'},   
        { id: 36, number: 36, disabled: false, status: 'available'},   
        { id: 37, number: 37, disabled: false, status: 'available'},   
        { id: 38, number: 38, disabled: false, status: 'available'},   
        { id: 39, number: 39, disabled: false, status: 'available'},   
        { id: 40, number: 40, disabled: false, status: 'available'},   
        { id: 41, number: 41, disabled: false, status: 'available'},   
        { id: 42, number: 42, disabled: false, status: 'available'},   
        { id: 43, number: 43, disabled: false, status: 'available'},   
        { id: 44, number: 44, disabled: false, status: 'available'},      
        { id: 45, number: 45, disabled: false, status: 'available'},      
    ],
    selectedSeats: [],
    isSeatLoading: false,
    isSeatSelecting: false,
    isSeatDeselecting: false,
};


const seatSelectionReducer = (state = initialState, action) => {
    switch(action.type){
        case REQUEST_LOAD_SEATS: 
            return {
                ...state,
                isSeatLoading: true,
            }
        case LOAD_SEAT_SUCCESS: 
            return {
                ...state,
                isSeatLoading: false,
            }
        case REQUEST_SELECT_SEAT:
            return {
                ...state,
                isSeatSelecting: true
            }
        case SELECT_SEAT_SUCCESS: 
            const seat_id = action.payload.seat_id;
            let selectedSeat = state.seats.filter((seat, i) => seat.id === seat_id)[0];
            return {
                ...state,
                seats: state.seats.map( seat => {
                    if(seat_id == seat.id){
                        seat.status = 'booked';
                    }
                    return seat;
                }),
                selectedSeats: [...state.selectedSeats, selectedSeat],
                totalAmount: state.totalAmount + 5000,
                isSeatSelecting: false
            }

            case REQUEST_DESELECT_SEAT:
            return {
                ...state,
                isSeatDeselecting: true
            }

            case DESELECT_SEAT_SUCCESS: 
                const deselect_seat_id = action.payload.deselect_seat_id;
                return {
                    ...state,
                    seats: state.seats.map( seat => {
                        if(deselect_seat_id == seat.id){
                            seat.status = 'available';
                        }
                        return seat;
                    }),
                    selectedSeats: state.selectedSeats.filter((seat, i) => seat.id != deselect_seat_id),
                    totalAmount: state.totalAmount - 5000,
                    isSeatDeselecting: true
                }
		
		default: 
            return state
	}
}



export default seatSelectionReducer;
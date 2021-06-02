import { 
	REQUEST_LOAD_SEATS, 
	LOAD_SEAT_SUCCESS, 
	REQUEST_SELECT_SEAT, 
	SELECT_SEAT_SUCCESS, 
	REQUEST_DESELECT_SEAT, 
	DESELECT_SEAT_SUCCESS 
} from './types';

export function loadSeats(){
	return {
		type: REQUEST_LOAD_SEATS
	}
}

export const loadSeatSuccess = () => (dispatch) => {
	dispatch(loadSeats());
	setTimeout(() => {
		dispatch({ type: LOAD_SEAT_SUCCESS })
	  }, 
	  10000)
}

export function selectSeat(seat_id){
	return {
		type: REQUEST_SELECT_SEAT,
        payload: { seat_id }
	}
}

export const selectSeatSuccess = (seat_id) => (dispatch) => {
	dispatch(selectSeat);
	setTimeout(() => {
		dispatch({
			type: SELECT_SEAT_SUCCESS,
			payload: { seat_id }
		})
	  }, 
	  100);

}

export function deselectSeat(deselect_seat_id){
	return {
		type: REQUEST_DESELECT_SEAT,
        payload: { deselect_seat_id }
	}
}

export const deselectSeatSuccess = (deselect_seat_id) => dispatch =>{
	dispatch(deselectSeat);
	setTimeout(() => {
		dispatch({
			type: DESELECT_SEAT_SUCCESS,
        payload: { deselect_seat_id }
		})
	  }, 
	  100);
}
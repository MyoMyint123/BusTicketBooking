import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import seatSelectionReducer from './seatSelectionReducer';


export default combineReducers({
	seatSelection: seatSelectionReducer,
  })
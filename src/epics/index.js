import { ofType, combineEpics } from "redux-observable";
import { map, delay, mergeMap } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';
import {
    loadSeatSuccess,
    selectSeatSuccess,
    deselectSeatSuccess,
  } from "../actions/seatSelectionAction";
  import { REQUEST_SELECT_SEAT, REQUEST_DESELECT_SEAT, REQUEST_LOAD_SEATS } from '../actions/types';

const getSeatsEpic = action$ => {
    // console.log(action$)
        return action$.pipe(
            ofType(REQUEST_LOAD_SEATS),
            delay(1000),
            map(() => loadSeatSuccess())
        );
    }

const selectSeatEpic = action$ => {
        return action$.pipe(
            ofType(REQUEST_SELECT_SEAT),
            delay(1000),
            map(() => selectSeatSuccess())
        );
    }    

const deselectSeatEpic = action$ => {
    return action$.pipe(
        ofType(REQUEST_DESELECT_SEAT),
        delay(1000),
        map(() => deselectSeatSuccess())
    );
}    

//   const getSeatsEpic = action$ => action$.pipe(
//     ofType(LOAD_SEATS),
//     mergeMap(action =>
//       ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
//         map(response => loadSeatSuccess(response))
//       )
//     )
//   );

const rootEpic = combineEpics(
    getSeatsEpic,
    selectSeatEpic,
    deselectSeatEpic
);

export default rootEpic;
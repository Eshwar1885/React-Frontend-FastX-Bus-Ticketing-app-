import { combineReducers } from 'redux';
import {
  SELECT_ORIGIN,
  SELECT_DESTINATION,
  SELECT_TRAVELDATE,
  // SELECT_BUS,
  // SELECT_SEATS,
  // FETCH_AVAILABLE_SEATS,
  // UPDATE_TOTAL_COST,

  SAVE_SELECTED_SEATS,

  SET_BUS_INFO,
  RESET_SELECTED_SEATS,
  SET_BOOKING_ID, 

  

} from './Actions';

// Initial state
const initialState = {
  origin: '',
  destination: '',
  travelDate: '',
  // selectedBus: null,

  busName: '',
  busType: '',
  selectedSeats:[], 

};

// Reducers
const originReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ORIGIN:
      return {
        ...state,
        origin: action.payload
      };
    default:
      return state;
  }
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DESTINATION:
      return {
        ...state,
        destination: action.payload
      };
    default:
      return state;
  }
};

const travelDateReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_TRAVELDATE:
        return {
          ...state,
          travelDate: action.payload
        };
      default:
        return state;
    }
  };

// const busReducer = (state = initialState.selectedBus, action) => {
//   switch (action.type) {
//     case SELECT_BUS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const seatsReducer = (state = initialState.selectedSeats, action) => {
//   switch (action.type) {
//     case SELECT_SEATS:
//       return action.payload;
//     default:
//       return state;
//   }
// };



// const availableSeatsReducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_AVAILABLE_SEATS:
//       return action.payload; // Assuming payload is the available seats data
//     default:
//       return state;
//   }
// };

// const totalCostReducer = (state = 0, action) => {
//   switch (action.type) {
//     case UPDATE_TOTAL_COST:
//       return action.payload;
//     default:
//       return state;
//   }
// };



const busInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUS_INFO:
      return {
        ...state,
        busName: action.payload.busName,
        busType: action.payload.busType,
        busId : action.payload.busId
      };
    default:
      return state;
  }
};

// const saveSelectedSeatsReducer = (state = [], action) => {
//   switch (action.type) {
//     case SAVE_SELECTED_SEATS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case RESET_SELECTED_SEATS:
//       return {
//         ...state,
//         selectedSeats: [],
//       };
//     default:
//       return state;
//   }
// };

const saveSelectedSeatsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_SELECTED_SEATS:
      return action.payload;
    case RESET_SELECTED_SEATS:
      return [];
    default:
      return state;
  }
};


// Reducer for bookingId
const bookingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SET_BOOKING_ID:
      return action.payload;
    default:
      return state;
  }
};







// Combine reducers
const rootReducer = combineReducers({
  origin: originReducer,
  destination: destinationReducer,
  travelDate:travelDateReducer,
  // selectedBus: busReducer,
  // selectedSeats: seatsReducer,

  // availableSeats: availableSeatsReducer,
  // totalCost: totalCostReducer,

  selectedSeats: saveSelectedSeatsReducer,
  busInfo: busInfoReducer,
  bookingId: bookingIdReducer,
  // resetSeats: reducer
});



export default rootReducer;

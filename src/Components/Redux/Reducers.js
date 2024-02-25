// import { combineReducers } from 'redux';
// import {
//   SELECT_ORIGIN,
//   SELECT_DESTINATION,
//   SELECT_BUS,
//   SELECT_SEATS,
// } from './Actions';

// // Initial state
// const initialState = {
//   origin: '',
//   destination: '',
//   selectedBus: null,
//   selectedSeats: [],
// };

// // Reducers
// const originReducer = (state = initialState.origin, action) => {
//   switch (action.type) {
//     case SELECT_ORIGIN:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const destinationReducer = (state = initialState.destination, action) => {
//   switch (action.type) {
//     case SELECT_DESTINATION:
//       return action.payload;
//     default:
//       return state;
//   }
// };

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

// // Combine reducers
// const rootReducer = combineReducers({
//   origin: originReducer,
//   destination: destinationReducer,
//   selectedBus: busReducer,
//   selectedSeats: seatsReducer,
// });

// export default rootReducer;

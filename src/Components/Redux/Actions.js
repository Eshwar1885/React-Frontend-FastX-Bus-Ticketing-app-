// Action types
export const SELECT_ORIGIN = 'SELECT_ORIGIN';
export const SELECT_DESTINATION = 'SELECT_DESTINATION';
export const SELECT_TRAVELDATE= 'SELECT_TRAVELDATE';

// export const SELECT_BUS = 'SELECT_BUS';
// export const SELECT_SEATS = 'SELECT_SEATS';

// export const FETCH_AVAILABLE_SEATS = 'FETCH_AVAILABLE_SEATS';
// export const UPDATE_TOTAL_COST = 'UPDATE_TOTAL_COST';


export const SAVE_SELECTED_SEATS= 'SAVE_SELECTED_SEATS';

// Action creators
export const selectOrigin = (origin) => ({
  type: SELECT_ORIGIN,
  payload: origin,
});

export const selectDestination = (destination) => ({
  type: SELECT_DESTINATION,
  payload: destination,
});

export const selectTravelDate = (travelDate) => ({
    type: SELECT_TRAVELDATE,
    payload: travelDate,
  });

// export const selectBus = (bus) => ({
//   type: SELECT_BUS,
//   payload: bus,
// });

// export const selectSeats = (seats) => ({
//   type: SELECT_SEATS,
//   payload: seats,
// });



// export const fetchAvailableSeats = (busId) => ({
//   type: FETCH_AVAILABLE_SEATS,
//   payload: busId,
// });

// export const updateTotalCost = (cost) => ({
//   type: UPDATE_TOTAL_COST,
//   payload: cost,
// });




export const saveSelectedSeats = (selectedSeats) => ({
  type: SAVE_SELECTED_SEATS,
  payload: selectedSeats,
});
// import { createStore } from 'redux';
// import rootReducer from './Reducers';

// const store = createStore(rootReducer);

// export default Store;



import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './ModifiedReducers';

const Store = configureStore({
  reducer: rootReducer,
  // Optionally provide middleware, enhancers, and other store configurations here
});

export default Store;

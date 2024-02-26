import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './ModifiedReducers';

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;

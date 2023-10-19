import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';

 const store = configureStore({
  reducer: {
    counter: counterSlice    // you can also write only counter with nothing in front accroding to ES6
  }, 
});


export default store;
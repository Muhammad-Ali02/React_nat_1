import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//     value : 0,
// };

 const counterSlice = createSlice({
    name: 'counts',
    //initialState: initialState
    initialState: {
        value: 0,
    },
    reducers: {     //this is big/macroReducer and all other microReducers go there

        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        },
    },
});


export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
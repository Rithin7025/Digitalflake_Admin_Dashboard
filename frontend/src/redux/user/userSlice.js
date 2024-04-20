import { createSlice } from '@reduxjs/toolkit'


//defining the inital state
const initialState = {
    currentUser : null
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        signInSuccess : (state,action) => {
                state.currentUser = action.payload;
        },
        logout : (state) => {
            state.currentUser = null ; 
        }
    }
})

export const {signInSuccess , logout} = userSlice.actions;

export default userSlice.reducer;   
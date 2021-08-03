import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    email: "",
    uid: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
      saveUser: (state, action: {payload: typeof initialUserState}) => {
        return {
            ...state,
            ...action.payload
        }
      },
      logout: (state) => {
        return {
            ...initialUserState
        }
      }
    },
});

export const {
    saveUser,
    logout,
 } = userSlice.actions;
 
 export default userSlice.reducer;
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
    name: string
    uid: string
}

export const usersSlice = createSlice({
    name: "users",
    initialState: [] as IUser[],
    reducers: {
      saveUser: (state, action: PayloadAction<IUser>) => {
        const user = state.find((a) => a.uid === action.payload.uid)
        if(user){
            user.name = action.payload.name
        }else{
            state.push(action.payload)
        }
      },
      saveUsers: (state, action: PayloadAction<IUser[]>) => {
          return {
              ...action.payload
          }
      }
    },
});

export const {
    saveUser,
    saveUsers
} = usersSlice.actions;
export type {
    IUser
}
export default usersSlice.reducer;
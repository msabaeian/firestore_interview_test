import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import chatSlice from "./slices/chatSlice";
import userSlice from "./slices/userSlice";
import usersSlice from "./slices/usersSlice";

const store = configureStore({
    reducer: {
      user: userSlice,
      users: usersSlice,
      chat: chatSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
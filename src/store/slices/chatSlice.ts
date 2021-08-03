import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import GiftedChat, { IMessage } from 'react-native-gifted-chat'

export const usersSlice = createSlice({
    name: "chat",
    initialState: [] as IMessage[],
    reducers: {
      saveMessage: (state, action: PayloadAction<IMessage>) => {
        const msg = state.find((a) => a._id === action.payload._id)
        if(!msg) {
          return [action.payload, ...state]
          state.push(action.payload)
        }
      },
      clear: (state) => {
          return []
      }
    },
});

export const {
    saveMessage,
    clear
} = usersSlice.actions;
export type {
    IMessage
}
export default usersSlice.reducer;
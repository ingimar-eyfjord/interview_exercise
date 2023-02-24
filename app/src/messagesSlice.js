import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    allMessages: [],
    message: "",
  },
  reducers: {
    setNewMessage: (state, action) => {
      state.message = action.payload;
    },
    setAllMessages: (state, action) => {
      state.allMessages = action.payload;
    },
  },
});

export const { setNewMessage, setAllMessages } = messagesSlice.actions;

export default messagesSlice.reducer;

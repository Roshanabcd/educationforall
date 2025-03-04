import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  contacts: [],
  currentContact: null,
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchMessagesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
      state.error = null;
    },
    fetchMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
    updateContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  addMessage,
  setCurrentContact,
  updateContacts,
} = chatSlice.actions;

export default chatSlice.reducer;
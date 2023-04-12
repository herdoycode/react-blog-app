import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "messages",
  initialState: {
    result: null,
    list: [],
    messages: {},
    deleted: null,
    loading: false,
  },
  reducers: {
    messagesRequested: (messages, action) => {
      messages.loading = true;
    },
    messagesRecived: (messages, action) => {
      messages.list = action.payload;
      messages.loading = false;
    },
    messagesRequestFailed: (messages, action) => {
      messages.loading = false;
    },
    messagesAdded: (messages, action) => {
      messages.result = action.payload;
      messages.list.push(action.payload);
      messages.loading = false;
    },
    messagesGeted: (messages, action) => {
      messages.messages = action.payload;
      messages.loading = false;
    },
    messagesDeleted: (messages, action) => {
      messages.deleted = action.payload;
      const { id } = action.payload;
      const index = messages.list.findIndex((messages) => messages._id === id);
      messages.list.splice(index, 1);
      setTimeout(() => (messages.deleted = null), 200);
      messages.loading = false;
    },
  },
});

export default slice.reducer;

const {
  messagesRecived,
  messagesRequestFailed,
  messagesRequested,
  messagesAdded,
  messagesGeted,
  messagesDeleted,
} = slice.actions;

const url = "/messages";

export const loadmessagess = () =>
  apiCallBegan({
    url,
    onStart: messagesRequested.type,
    onSuccess: messagesRecived.type,
    onError: messagesRequestFailed.type,
  });

export const addmessages = (messages) =>
  apiCallBegan({
    url,
    method: "post",
    data: messages,
    onStart: messagesRequested.type,
    onSuccess: messagesAdded.type,
    onError: messagesRequestFailed,
  });

export const deletemessages = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onStart: messagesRequested.type,
    onSuccess: messagesDeleted.type,
    onError: messagesRequestFailed.type,
  });

export const getmessages = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    onStart: messagesRequested.type,
    onSuccess: messagesGeted.type,
    onError: messagesRequestFailed.type,
  });

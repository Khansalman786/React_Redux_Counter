import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0, privacyVal: false },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    sub: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
    privacy: (state) => {
      !state.privacyVal;
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

const counterstore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const PrivacyAction = privacySlice.actions;
export default counterstore;

// const INITIAL_VALUE = {
//   counter: 4,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...store, counter: store.counter + 1 };
//     case "DECREMENT":
//       return { ...store, counter: store.counter - 1 };
//     case "ADD":
//       return { ...store, counter: store.counter + Number(action.payload) };
//     case "SUB":
//       return { ...store, counter: store.counter - Number(action.payload) };
//     case "PRIVACY_TOGGLE":
//       return { ...store, privacy: !store.privacy };
//     default:
//       return store;
//   }
// };

// const counterstore = createStore(counterReducer);

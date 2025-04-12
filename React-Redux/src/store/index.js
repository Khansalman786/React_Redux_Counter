import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 4,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, counter: store.counter + 1 };
    case "DECREMENT":
      return { ...store, counter: store.counter - 1 };
    case "ADD":
      return { ...store, counter: store.counter + Number(action.payload) };
    case "SUB":
      return { ...store, counter: store.counter - Number(action.payload) };
    case "PRIVACY_TOGGLE":
      return { ...store, privacy: !store.privacy };
    default:
      return store;
  }
};

const counterstore = createStore(counterReducer);

export default counterstore;

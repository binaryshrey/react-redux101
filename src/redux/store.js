import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/userReducer";
import postReducer from "./post/postReducer";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  userReducer,
  loadFromLocalStorage(),
  applyMiddleware(thunk)
);
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

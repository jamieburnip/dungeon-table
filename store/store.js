import { createStore, combineReducers } from "redux";
import { chatReducer } from "./chat";

export const store = createStore(combineReducers({ chat: chatReducer }));

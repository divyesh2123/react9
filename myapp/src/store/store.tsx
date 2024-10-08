import { applyMiddleware, createStore } from "redux";
import rootReducer, { AppState } from "../reducer/rootReducer";
import  {thunk, ThunkMiddleware } from 'redux-thunk';
import { Action } from 'redux';


const store = createStore(rootReducer,{},applyMiddleware(thunk  as ThunkMiddleware<AppState, Action>));

export type AppDispatch = typeof store.dispatch

export default store;
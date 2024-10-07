import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({

    counter: counterReducer,
    user:userReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

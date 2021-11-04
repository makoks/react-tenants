import { combineReducers } from "redux";
import addressReducer from "./address/address.reducer";

const rootReducer = () =>
    combineReducers({
        address: addressReducer,
    });

export default rootReducer;

import { combineReducers } from "redux";
import addressReducer from "./address/address.reducer";
import tenantsReducer from "./tenants/tenants.reducer";

const rootReducer = () =>
    combineReducers({
        address: addressReducer,
        tenants: tenantsReducer
    });

export default rootReducer;

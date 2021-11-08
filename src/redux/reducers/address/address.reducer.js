import actionTypes from "./address.actionTypes";
import initialState from "./address.initialState";

const addressReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.STREETS_LOAD_START:
            return {
                ...state,
                areStreetsLoading: true,
                streets: null,
                errorMessage: null
            };
        case actionTypes.STREETS_LOAD_SUCCESS:
            return {
                ...state,
                areStreetsLoading: false,
                streets: payload
            };


        case actionTypes.HOUSES_LOAD_START:
            return {
                ...state,
                areHousesLoading: true,
                houses: null,
                errorMessage: null
            };
        case actionTypes.HOUSES_LOAD_SUCCESS:
            return {
                ...state,
                areHousesLoading: false,
                houses: payload
            };


        case actionTypes.FLATS_LOAD_START:
            return {
                ...state,
                areFlatsLoading: true,
                flats: null,
                errorMessage: null
            };
        case actionTypes.FLATS_LOAD_SUCCESS:
            return {
                ...state,
                areFlatsLoading: false,
                flats: payload
            };


        case actionTypes.SELECT_STREET:
            return {
                ...state,
                streetId: payload,
                houseId: null,
                flatId: null,
                tenants: null
            };
        case actionTypes.SELECT_HOUSE:
            return {
                ...state,
                houseId: payload,
                flatId: null,
                tenants: null
            };
        case actionTypes.SELECT_FLAT:
            return {
                ...state,
                flatId: payload
            };


        case actionTypes.ADDRESS_LOAD_ERROR:
            return {
                ...state,
                areStreetsLoading: false,
                areHousesLoading: false,
                areFlatLoading: false,
                errorMessage: payload
            };

        default:
            return state;
    }
};

export default addressReducer;

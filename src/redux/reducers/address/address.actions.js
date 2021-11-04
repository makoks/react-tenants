import actionTypes from "./address.actionTypes";

const streetsLoadStart = () => ({
    type: actionTypes.STREETS_LOAD_START,
});
const streetsLoadSuccess = (streets) => ({
    type: actionTypes.STREETS_LOAD_SUCCESS,
    payload: streets,
});


const housesLoadStart = () => ({
    type: actionTypes.HOUSES_LOAD_START,
});
const housesLoadSuccess = (houses) => ({
    type: actionTypes.HOUSES_LOAD_SUCCESS,
    payload: houses,
});


const flatsLoadStart = () => ({
    type: actionTypes.FLATS_LOAD_START,
});
const flatsLoadSuccess = (flats) => ({
    type: actionTypes.FLATS_LOAD_SUCCESS,
    payload: flats,
});


const selectStreet = (streetId) => ({
    type: actionTypes.SELECT_STREET,
    payload: streetId,
});
const selectHouse = (houseId) => ({
    type: actionTypes.SELECT_HOUSE,
    payload: houseId,
});
const selectFlat = (flatId) => ({
    type: actionTypes.SELECT_FLAT,
    payload: flatId,
});


const addressLoadError = (errorMessage) => ({
    type: actionTypes.ADDRESS_LOAD_ERROR,
    payload: errorMessage,
});

const actions = {
    streetsLoadStart,
    streetsLoadSuccess,

    housesLoadStart,
    housesLoadSuccess,

    flatsLoadStart,
    flatsLoadSuccess,

    selectStreet,
    selectHouse,
    selectFlat,

    addressLoadError
};

export default actions;
